package com.crm.dao;

import java.sql.Timestamp;
import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.crm.vo.TLog;



public class TLogDAO extends BaseDao<TLog> {
	private static final Logger log = LoggerFactory.getLogger(TLogDAO.class);
	
}