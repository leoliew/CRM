package com.crm.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.crm.biz.ModuleBiz;
import com.crm.biz.RoleBiz;
import com.crm.vo.TModule;
import com.crm.vo.TRole;
import com.opensymphony.xwork2.ActionSupport;

public class ModuleAction extends ActionSupport implements ServletRequestAware{

	private HttpServletRequest request;
	private RoleBiz roleBiz;
	private int ptotalpage;// 总页数
	private int preqpage;// 当前页
	private String action;
	private ModuleBiz moduleBiz;
	private String moduleCode;
	private String moduleName;
	private String upperModuleId;
	private String url;
	private String	remark;
	private String moduleId;
	
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
		List  list = moduleBiz.list(preqpage, pageSize,moduleName);
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
		String result=StringUtils.isEmpty(action)?"showModule":"select";
		return result;
	}
	
	
	/*
	 * 添加模块
	 */
	public String add(){
		String result = null;
		// 转发到添加模块的页面
		if (action.equals("0")) {
			request.setAttribute("module_list", moduleBiz.findAll());
			result = "add0";
		}
		// 保存模块信息
		else if (action.equals("1")){
		TModule module=new TModule(moduleCode,moduleName,url,Integer.parseInt(upperModuleId),remark);
			moduleBiz.saveOrUpdate(module);
			result = "add1";
		}
		return result;
	}
	
	
	/**
	 * 修改模块
	 * @return
	 */
	public String mod(){
		String result = null;
		// 转发到修改模块的页面
		if (action.equals("0")) {
			request.setAttribute("module_list", moduleBiz.findAll());
			request.setAttribute("module", moduleBiz.findById(Integer.parseInt(moduleId)));
			result = "mod0";
		}
		// 修改模块信息
		else if (action.equals("1")){
			TModule module=new TModule(moduleCode,moduleName,url,Integer.parseInt(upperModuleId),remark);
			module.setModuleId(Integer.parseInt(moduleId));
			moduleBiz.saveOrUpdate(module);
			result = "add1";
		}
		return result;
	}
	
	/**
	 *删除模块
	 * @return
	 */
	public String del(){
		moduleBiz.delete(moduleBiz.findById(Integer.parseInt(moduleId)));
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
	public ModuleBiz getModuleBiz() {
		return moduleBiz;
	}
	public void setModuleBiz(ModuleBiz moduleBiz) {
		this.moduleBiz = moduleBiz;
	}


	public String getModuleCode() {
		return moduleCode;
	}


	public void setModuleCode(String moduleCode) {
		this.moduleCode = moduleCode;
	}


	public String getModuleName() {
		return moduleName;
	}


	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}


	public String getUpperModuleId() {
		return upperModuleId;
	}


	public void setUpperModuleId(String upperModuleId) {
		this.upperModuleId = upperModuleId;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}


	public String getRemark() {
		return remark;
	}


	public void setRemark(String remark) {
		this.remark = remark;
	}


	public String getModuleId() {
		return moduleId;
	}


	public void setModuleId(String moduleId) {
		this.moduleId = moduleId;
	}
	
	
}
