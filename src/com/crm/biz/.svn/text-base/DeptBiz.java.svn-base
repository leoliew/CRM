package com.crm.biz;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.crm.dao.BaseDao;
import com.crm.dao.TDeptDAO;
import com.crm.vo.TDept;
import com.crm.vo.TUser;

public class DeptBiz {
	private TDeptDAO deptDAO;
	private BaseDao<TDept> baseDao;
	/**
	 * 查询所有的部门
	 * @return
	 */
	public List<TDept> findAllDeptName(){
		return deptDAO.findAllDeptName();
	}
	
	/**
	 * 保存或更新用户
	 * @param user
	 */
	@Transactional
	public void saveOrUpdate(TDept dept) {
		baseDao.saveOrUpdate(dept);
	}
	/**
	 * 根据deptId查询部门
	 * @param deptId
	 * @return
	 */
	public TDept findById(Integer deptId){
		return  baseDao.findById(deptId);
	}
	
	@Transactional
	public void delete(TDept dept){
		baseDao.delete(dept);
	}
	
	/**
	 * 分页查询
	 * @param preqpage
	 * @param pageSize
	 * @return
	 */
	public List list(int pageNo, int pageSize,String deptName,String address) {
		DetachedCriteria dc = DetachedCriteria.forClass(TDept.class);
		if (!StringUtils.isEmpty(deptName)) {
			dc.add(Restrictions.like("deptName", deptName, MatchMode.ANYWHERE));
		}
		if (!StringUtils.isEmpty(address)) {
			dc.add(Restrictions
					.like("address", address, MatchMode.ANYWHERE));
		}
		List  list = baseDao.queryByCriteria(dc, true, pageNo, pageSize);
		return list;
	}
	public BaseDao<TDept> getBaseDao() {
		return baseDao;
	}
	public void setBaseDao(BaseDao<TDept> baseDao) {
		this.baseDao = baseDao;
	}
	
	public TDeptDAO getDeptDAO() {
		return deptDAO;
	}
	public void setDeptDAO(TDeptDAO deptDAO) {
		this.deptDAO = deptDAO;
	}
	
	
}
