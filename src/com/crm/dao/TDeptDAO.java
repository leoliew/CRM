package com.crm.dao;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.crm.vo.TDept;


public class TDeptDAO extends BaseDao<TDept> {
	private static final Logger log = LoggerFactory.getLogger(TDeptDAO.class);

	/**
	 * 查询所有部门的id和名称,用于添加用户的列表显示
	 * @return
	 */
	public List<TDept> findAllDeptName() {
		String hql=" select new TDept(deptId,deptName) from TDept ";
		return super.queryByHql(hql, null, null);
	}

}