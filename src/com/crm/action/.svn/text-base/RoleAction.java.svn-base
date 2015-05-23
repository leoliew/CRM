package com.crm.action;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.crm.biz.DeptBiz;
import com.crm.biz.ModuleBiz;
import com.crm.biz.RoleBiz;
import com.crm.dao.TModuleDAO;
import com.crm.vo.TDept;
import com.crm.vo.TModule;
import com.crm.vo.TRole;
import com.crm.vo.TUser;
import com.opensymphony.xwork2.ActionSupport;

public class RoleAction extends ActionSupport implements ServletRequestAware{
	private HttpServletRequest request;
	private RoleBiz roleBiz;
	private int ptotalpage;// 总页数
	private int preqpage;// 当前页
	private String action;
	private String roleName;
	private String roleDesc;
	private String status;
	private String roleId;
	private ModuleBiz moduleBiz;
	private String rolemodule;
	
	//转发到查询的页面
	public String toSelect(){
		return "toSelect";
	}
	
	/**
	 * 查询部门列表
	 * @return
	 */
	public String list(){
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
		List  list = roleBiz.list(preqpage, pageSize,roleName);
		System.out.println("List>>>>>"+list);
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
		String result=StringUtils.isEmpty(action)?"showRole":"select";
		return result;
	}
	
	
	/*
	 * 添加角色
	 */
	public String add(){
		String result = null;
		// 转发到添加角色的页面
		if (action.equals("0")) {
			result = "add0";
		}
		// 保存角色信息
		else if (action.equals("1")){
			TRole role=new TRole(roleName,roleDesc,status);
			roleBiz.saveOrUpdate(role);
			result = "add1";
		}
		return result;
	}
	
	
	/**
	 * 修改角色
	 * @return
	 */
	public String mod(){
		String result = null;
		// 转发到修改角色的页面
		if (action.equals("0")) {
			request.setAttribute("role", roleBiz.findById(Integer.parseInt(roleId)));
			result = "mod0";
		}
		// 修改角色信息
		else if (action.equals("1")){
			TRole role=new TRole(roleName, roleDesc, status);
			role.setRoleId(Integer.parseInt(roleId));
			roleBiz.saveOrUpdate(role);
			result = "add1";
		}
		return result;
	}
	
	/**
	 *删除角色
	 * @return
	 */
	public String del(){
		//deptBiz.delete(deptBiz.findById(Integer.parseInt(deptId)));
		return "add1";
	}
	
	/**
	 * 角色授权
	 * @return
	 */
	public String authorization(){
		String result = null;
		if (action.equals("0")) {
			//查询当前角色
			TRole role=roleBiz.findById(Integer.parseInt(roleId));
			System.out.println("roleId1>>>>"+roleId);
			request.setAttribute("role",role);
			request.setAttribute("allModuleList", moduleBiz.findAll());
			result = "roleAuthorization";
		}
		// 授权给角色
		else if (action.equals("1")) {
			System.out.println("roleId2>>>>"+roleId);
			TRole role=roleBiz.findById(Integer.parseInt(roleId));
			
			Set<TModule>moduleSet=new HashSet<TModule>();
			TModule module=null;
			//如果权限id不为空,则转化为数组
			if(!StringUtils.isEmpty(rolemodule)){
				String[] moduleIdsArray=rolemodule.split(";");
				for(int i=0;i <moduleIdsArray.length;i++){
					module=moduleBiz.findById(Integer.parseInt(moduleIdsArray[i]));
					moduleSet.add(module);
				}
			}
			role.setModules(moduleSet);
			roleBiz.saveOrUpdate(role);
//			System.out.println("用户授权>>>>>"+roles[0]);
//			Set<TRole> roleSet=new HashSet<TRole>();
//			for(int i=0 ;i<roles.length; i++){
//				role=roleBiz.findById(Integer.parseInt(roles[i]));
//				roleSet.add(role);
//			}
//			authorization_user.setRoles(roleSet);
//			System.out.println(authorization_user.getRoles());
//			userBiz.saveOrUpdate(authorization_user);
//			result = "save";
			return "add1";
		}
		return result;
	}
	
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;	
	}
	public HttpServletRequest getRequest() {
		return request;
	}
	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}
	public RoleBiz getRoleBiz() {
		return roleBiz;
	}
	public void setRoleBiz(RoleBiz roleBiz) {
		this.roleBiz = roleBiz;
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


	public String getRoleName() {
		return roleName;
	}


	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}


	public String getRoleDesc() {
		return roleDesc;
	}


	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getRoleId() {
		return roleId;
	}


	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}


	public ModuleBiz getModuleBiz() {
		return moduleBiz;
	}


	public void setModuleBiz(ModuleBiz moduleBiz) {
		this.moduleBiz = moduleBiz;
	}

	public String getRolemodule() {
		return rolemodule;
	}

	public void setRolemodule(String rolemodule) {
		this.rolemodule = rolemodule;
	}



	
	
}
