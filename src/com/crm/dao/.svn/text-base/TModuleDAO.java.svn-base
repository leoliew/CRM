package com.crm.dao;

import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.crm.vo.TModule;


public class TModuleDAO extends BaseDao<TModule> {
	private static final Logger log = LoggerFactory.getLogger(TModuleDAO.class);
	
	/**
	 * 查询所有的模块
	 * @return
	 */
	public List<TModule> findAll(){
		String hql=" from TModule ";
		return super.queryByHql(hql, null, null);
	}
	
}