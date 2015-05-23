package com.crm.dao;

import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.crm.vo.TRole;



public class TRoleDAO extends BaseDao<TRole> {
	private static final Logger log = LoggerFactory.getLogger(TRoleDAO.class);
	
	/**
	 * 查询所有的权限
	 * @return
	 */
	public List<TRole> findAll(){
		String hql=" from TRole ";
		return super.queryByHql(hql, null, null);
	}
	
}