package com.crm.vo;

import java.util.HashSet;
import java.util.Set;

/**
 * TRole entity. @author MyEclipse Persistence Tools
 */

public class TRole implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 2153356862652508224L;
	private Integer roleId;
	private String roleName;
	private String roleDesc;
	private String status;
	private String isCheck;
	private Set modules = new HashSet(0);
	private Set users = new HashSet(0);

	// Constructors

	/** default constructor */
	public TRole() {
	}

	public TRole(String roleName, String roleDesc, String status) {
		super();
		this.roleName = roleName;
		this.roleDesc = roleDesc;
		this.status = status;
	}

	/** full constructor */
	public TRole(String roleName, String roleDesc, String status,
			Set modules, Set users) {
		this.roleName = roleName;
		this.roleDesc = roleDesc;
		this.status = status;
		this.modules = modules;
		this.users = users;
	}

	// Property accessors

	public Integer getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleDesc() {
		return this.roleDesc;
	}

	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Set getModules() {
		return modules;
	}

	public void setModules(Set modules) {
		this.modules = modules;
	}

	public Set getUsers() {
		return users;
	}

	public void setUsers(Set users) {
		this.users = users;
	}

	public String getIsCheck() {
		return isCheck;
	}

	public void setIsCheck(String isCheck) {
		this.isCheck = isCheck;
	}


}