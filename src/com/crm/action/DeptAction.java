package com.crm.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.crm.biz.DeptBiz;
import com.crm.vo.TDept;
import com.crm.vo.TUser;
import com.opensymphony.xwork2.ActionSupport;

public class DeptAction extends ActionSupport implements ServletRequestAware{
	private HttpServletRequest request;
	private DeptBiz deptBiz;
	private int ptotalpage;// 总页数
	private int preqpage;// 当前页
	private String action;
	private String deptCode;
	private String deptName;
	private String chargeMan;
	private String linkPhone;
	private String address;
	private String remark;
	private String deptId;
	private String email;
	

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
		List  list = deptBiz.list(preqpage, pageSize,deptName,address);
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
		String result=StringUtils.isEmpty(action)?"showDept":"select";
		return result;
	}
	
	
	/*
	 * 添加部门
	 */
	public String add(){
		String result = null;
		// 转发到添加部门的页面
		if (action.equals("0")) {
			result = "add0";
		}
		// 保存部门信息
		else if (action.equals("1")){
			TDept tDept =new TDept(deptCode, deptName, chargeMan, linkPhone, address, remark);
			deptBiz.saveOrUpdate(tDept);
			result = "add1";
		}
		return result;
	}
	
	
	/**
	 * 修改部门
	 * @return
	 */
	public String mod(){
		String result = null;
		// 转发到修改部门的页面
		if (action.equals("0")) {
			request.setAttribute("dept", deptBiz.findById(Integer.parseInt(deptId)));
			result = "mod0";
		}
		// 修改部门信息
		else if (action.equals("1")){
			TDept tDept =new TDept(deptCode,deptName,chargeMan,linkPhone,email,address,remark);
			tDept.setDeptId(Integer.parseInt(deptId));
			deptBiz.saveOrUpdate(tDept);
			result = "add1";
		}
		return result;
	}
	
	/**
	 *删除部门
	 * @return
	 */
	public String del(){
		deptBiz.delete(deptBiz.findById(Integer.parseInt(deptId)));
		return "add1";
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


	public DeptBiz getDeptBiz() {
		return deptBiz;
	}


	public void setDeptBiz(DeptBiz deptBiz) {
		this.deptBiz = deptBiz;
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


	public String getDeptCode() {
		return deptCode;
	}


	public void setDeptCode(String deptCode) {
		this.deptCode = deptCode;
	}


	public String getDeptName() {
		return deptName;
	}


	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}


	public String getChargeMan() {
		return chargeMan;
	}


	public void setChargeMan(String chargeMan) {
		this.chargeMan = chargeMan;
	}


	public String getLinkPhone() {
		return linkPhone;
	}


	public void setLinkPhone(String linkPhone) {
		this.linkPhone = linkPhone;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getRemark() {
		return remark;
	}


	public void setRemark(String remark) {
		this.remark = remark;
	}


	public String getDeptId() {
		return deptId;
	}


	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	
	
}
