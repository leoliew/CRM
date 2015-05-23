package com.crm.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.crm.biz.DeptBiz;
import com.crm.biz.RoleBiz;
import com.crm.biz.UserBiz;
import com.crm.vo.TDept;
import com.crm.vo.TRole;
import com.crm.vo.TUser;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends ActionSupport implements ServletRequestAware, ServletResponseAware {
	private HttpServletRequest request;
	private HttpServletResponse response;
	private UserBiz userBiz;
	private String loginName;
	private String password;
	private int ptotalpage;// 总页数
	private int preqpage;// 当前页
	private String action;
	private String workNo;//工号
	private DeptBiz deptBiz;
	private String deptId; 
	private String sex;
	private String mobilePhone;
	private String workPhone;
	private String email;
	private String name;
	private String remark;
	private String userId;
	private RoleBiz roleBiz;
	private String[] roles;
	/**
	 * 用户登录
	 * @return
	 */
	public String login() {
		TUser loginUser = userBiz.login(loginName, password);
		if (loginUser != null) {
			request.getSession().setAttribute("user", loginUser);
			System.out.println(loginUser);
			userBiz.createTreeJs(loginUser);
			return SUCCESS;
		}
		addActionError("登录失败,请检查用户名或者密码是否正确!");
		return INPUT;
	}
	
	/**
	 * 分页查询所有的用户
	 * 
	 * @return
	 */
	public String list() {
		// 页码
		preqpage = 1;
		// 一页的大小
		int pageSize = 5;
		// 点击分页时提交来的页码
		String gotopage = request.getParameter("gotopage");
		if (!StringUtils.isEmpty(gotopage)) {
			preqpage = Integer.parseInt(gotopage);
		}
		// 点击分页时提交来的页码
		String pageSizeStr = request.getParameter("pageSize");
		if (!StringUtils.isEmpty(pageSizeStr)) {
			pageSize = Integer.parseInt(pageSizeStr);
		}
		List list = userBiz.list(preqpage, pageSize,workNo,loginName);
		if (!list.isEmpty()) {
			int rowCount = Integer.parseInt(list.get(1).toString());
			// 计算总页数
			ptotalpage = ((rowCount % pageSize) == 0) ? (rowCount / pageSize)
					: (rowCount / pageSize + 1);
			// 一页数据
			request.setAttribute("pageData", list.get(0));
			// 总行数
			request.setAttribute("ptotalrecord", rowCount);
			// 当前页
			request.setAttribute("preqpage", preqpage);
			// 总页数
			request.setAttribute("ptotalpage", ptotalpage);
			// 一页的大小
			request.setAttribute("pageSize", pageSize);
			// 总行数
			request.setAttribute("ptotalrecord", list.get(1));
			// 一页数据
			request.setAttribute("pageData", list.get(0));
			// 总行数
			request.setAttribute("ptotalrecord", list.get(1));

		}
		//用户管理，action,返回list
				//如果是模糊查询，则action为1,返回select
		String result=StringUtils.isEmpty(action)?"list":"select";
		return result;
	}

	//转发到查询的页面
	public String toSelect(){
		return "toSelect";
	}
	
	/**
	 * 转发到添加用户界面或添加用户
	 * @return
	 */
	public String add(){
		String result = null;
		// 转发到添加用户的页面
		if (action.equals("0")) {
			request.setAttribute("dept_list", deptBiz.findAllDeptName());
			result = "add";
		}
		// 保存用户信息
		else if (action.equals("1")) {
			TDept tDept = new TDept();
			tDept.setDeptId(Integer.parseInt(deptId));
			TUser addUser = new TUser(tDept, workNo, loginName, sex,
					password, mobilePhone, workPhone, email, name, remark);
			userBiz.saveOrUpdate(addUser);
			result = "save";
		}
		return result;
	}
	
	/**
	 * 转发到修改用户的页面和修改用户
	 * @return
	 */
	public String mod(){
		String result = null;
		// 转发到修改用户的页面
		if (action.equals("0")) {
			request.setAttribute("dept_list", deptBiz.findAllDeptName());
			request.setAttribute("user", userBiz.findById(Integer.parseInt(userId)));
			result = "mod";
		}
		// 修改用户信息
		else if (action.equals("1")) {
			TDept tDept = new TDept();
			tDept.setDeptId(Integer.parseInt(deptId));
			TUser updateUser = new TUser(tDept, workNo, loginName, sex,
					password, mobilePhone, workPhone, email, name, remark);
			updateUser.setUserId(Integer.parseInt(userId));
			userBiz.saveOrUpdate(updateUser);
			result = "save";
		}
		return result;
	}
	
	/**
	 * 根据用户id删除用户信息
	 * @return
	 */
	public String del(){
		TUser user=new TUser();
		user.setUserId(Integer.parseInt(userId));
		userBiz.deleteById(user);
		return "del";
	}
	
	/**
	 * 用户授权
	 * @return
	 */
	public String authorization(){
		String result = null;
		TRole role=null;
		// 转发到授权用户的页面
		if (action.equals("0")) {
		//1.查询当前用户
			TUser authorization_user=userBiz.findById(Integer.parseInt(userId));
			Set roleSet=authorization_user.getRoles();
			//2.查询所有角色列表
			List<TRole> roleList= roleBiz.findAll();
			//3.遍历角色列表
			for(int i=0; i<roleList.size(); i++){
				  role= (TRole) roleList.get(i);
				 if(roleSet.contains(role)){
					 //4.如果此角色为用户所有设置isCheck
					 role.setIsCheck("1");
				 }
			}
			//查询所有权限
			request.setAttribute("allRoleList",roleList);
			//要修改的用户
			request.setAttribute("authorization_user", authorization_user);
			result = "userAuthorization";
		}
		// 授权给用户
		else if (action.equals("1")) {
			TUser authorization_user=userBiz.findById(Integer.parseInt(userId));
			System.out.println("用户授权>>>>>"+roles[0]);
			Set<TRole> roleSet=new HashSet<TRole>();
			for(int i=0 ;i<roles.length; i++){
				role=roleBiz.findById(Integer.parseInt(roles[i]));
				roleSet.add(role);
			}
			authorization_user.setRoles(roleSet);
			System.out.println(authorization_user.getRoles());
			userBiz.saveOrUpdate(authorization_user);
			result = "save";
		}
		return result;
	}
	
	
	/**
	 * 安卓登录
	 * @return
	 * @throws IOException
	 */
	public String loginAn() throws IOException{
			String userName=request.getParameter("userName");
			String password=request.getParameter("password");
			System.out.println(request.getRequestURL());
			
			System.out.println("yon"+userName);
			System.out.println("mima"+password);
			TUser loginUser = userBiz.login(userName, password);
			PrintWriter out = response.getWriter();
			JSONObject jsonObject = new JSONObject();
			if (loginUser != null) {
				request.getSession().setAttribute("user", loginUser);
				System.out.println(loginUser);
				userBiz.createTreeJs(loginUser);
				jsonObject.put("msg", "成功");
				jsonObject.put("code", 0);
				out.println(jsonObject.toString());	
				return null;
			}
			jsonObject.put("msg", "失败");
			jsonObject.put("code", 0);
			addActionError("登录失败,请检查用户名或者密码是否正确!");
			return null;
	}
	
	
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
	}

	public HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public UserBiz getUserBiz() {
		return userBiz;
	}

	public void setUserBiz(UserBiz userBiz) {
		this.userBiz = userBiz;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getPtotalpage() {
		return ptotalpage;
	}

	public void setPtotalpage(int ptotalpage) {
		this.ptotalpage = ptotalpage;
	}

	public int getPreqpage() {
		return preqpage;
	}

	public void setPreqpage(int preqpage) {
		this.preqpage = preqpage;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getWorkNo() {
		return workNo;
	}

	public void setWorkNo(String workNo) {
		this.workNo = workNo;
	}

	public DeptBiz getDeptBiz() {
		return deptBiz;
	}

	public void setDeptBiz(DeptBiz deptBiz) {
		this.deptBiz = deptBiz;
	}

	public String getDeptId() {
		return deptId;
	}

	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getMobilePhone() {
		return mobilePhone;
	}

	public void setMobilePhone(String mobilePhone) {
		this.mobilePhone = mobilePhone;
	}

	public String getWorkPhone() {
		return workPhone;
	}

	public void setWorkPhone(String workPhone) {
		this.workPhone = workPhone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public RoleBiz getRoleBiz() {
		return roleBiz;
	}

	public void setRoleBiz(RoleBiz roleBiz) {
		this.roleBiz = roleBiz;
	}

	public String[] getRoles() {
		return roles;
	}

	public void setRoles(String[] roles) {
		this.roles = roles;
	}

	@Override
	public void setServletResponse(HttpServletResponse response) {
		this.response=response;
		
	}

	public HttpServletResponse getResponse() {
		return response;
	}

	public void setResponse(HttpServletResponse response) {
		this.response = response;
	}


	
	
}
