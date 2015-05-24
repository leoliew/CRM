package com.crm.biz;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.crm.dao.BaseDao;
import com.crm.dao.TRoleDAO;
import com.crm.vo.TDept;
import com.crm.vo.TRole;

public class RoleBiz {
	private TRoleDAO roleDAO;
	private BaseDao<TRole> baseDao;
	/**
	 * 查询所有的权限
	 * @return
	 */
		public List<TRole> findAll(){
			 return roleDAO.findAll();
		}
		
		/**
		 * 根据id查找权限
		 * @param roleId
		 * @return
		 */
		public TRole findById(Integer roleId){
			return roleDAO.findById(roleId);
		}
		public TRoleDAO getRoleDAO() {
			return roleDAO;
		}
		public void setRoleDAO(TRoleDAO roleDAO) {
			this.roleDAO = roleDAO;
		}

		/**
		 * 分页查询
		 * @param pageNo
		 * @param pageSize
		 * @return
		 */
		public List list(int pageNo, int pageSize,String roleName) {
			DetachedCriteria dc = DetachedCriteria.forClass(TRole.class);
			if (!StringUtils.isEmpty(roleName)) {
				dc.add(Restrictions.like("roleName", roleName, MatchMode.ANYWHERE));
			}
			List  list = baseDao.queryByCriteria(dc, true, pageNo, pageSize);
			return list;
		}

		/**
		 * 保存数据
		 * @return
		 */
		@Transactional
		public  void saveOrUpdate(TRole role){
			baseDao.saveOrUpdate(role);
		} 
		
		public BaseDao<TRole> getBaseDao() {
			return baseDao;
		}

		public void setBaseDao(BaseDao<TRole> baseDao) {
			this.baseDao = baseDao;
		}
		
		
}
