package com.crm.vo;

import java.util.HashSet;
import java.util.Set;

/**
 * TModule entity. @author MyEclipse Persistence Tools
 */

public class TModule implements java.io.Serializable {
	// Fields
	private Integer moduleId;
	private String moduleCode;
	private String moduleName;
	private String menuFlag;
	private String url;
	private Integer upperModuleId;
	private String remark;
	private Integer modulelevel;
	private String ancestor;
	private Set roles = new HashSet(0);

	// Constructors

	/** default constructor */
	public TModule() {
	}

	public TModule(String moduleCode, String moduleName, String url,
			Integer upperModuleId, String remark) {
		super();
		this.moduleCode = moduleCode;
		this.moduleName = moduleName;
		this.url = url;
		this.upperModuleId = upperModuleId;
		this.remark = remark;
	}

	/** full constructor */
	public TModule(String moduleCode, String moduleName, String menuFlag,
			String url, Integer upperModuleId, String remark,
			Integer modulelevel, String ancestor, Set roles) {
		this.moduleCode = moduleCode;
		this.moduleName = moduleName;
		this.menuFlag = menuFlag;
		this.url = url;
		this.upperModuleId = upperModuleId;
		this.remark = remark;
		this.modulelevel = modulelevel;
		this.ancestor = ancestor;
		this.roles = roles;
	}

	// Property accessors

	public Integer getModuleId() {
		return this.moduleId;
	}

	public void setModuleId(Integer moduleId) {
		this.moduleId = moduleId;
	}

	public String getModuleCode() {
		return this.moduleCode;
	}

	public void setModuleCode(String moduleCode) {
		this.moduleCode = moduleCode;
	}

	public String getModuleName() {
		return this.moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public String getMenuFlag() {
		return this.menuFlag;
	}

	public void setMenuFlag(String menuFlag) {
		this.menuFlag = menuFlag;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Integer getUpperModuleId() {
		return this.upperModuleId;
	}

	public void setUpperModuleId(Integer upperModuleId) {
		this.upperModuleId = upperModuleId;
	}

	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Integer getModulelevel() {
		return this.modulelevel;
	}

	public void setModulelevel(Integer modulelevel) {
		this.modulelevel = modulelevel;
	}

	public String getAncestor() {
		return this.ancestor;
	}

	public void setAncestor(String ancestor) {
		this.ancestor = ancestor;
	}

	public Set getRoles() {
		return roles;
	}

	public void setRoles(Set roles) {
		this.roles = roles;
	}



}