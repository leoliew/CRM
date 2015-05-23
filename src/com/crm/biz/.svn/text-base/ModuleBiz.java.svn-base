package com.crm.biz;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.crm.dao.BaseDao;
import com.crm.dao.TModuleDAO;
import com.crm.vo.TModule;

public class ModuleBiz {
private BaseDao<TModule> baseDao;
private TModuleDAO moduleDAO;
	/**
	 * 分页查询
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	public List list(int pageNo, int pageSize,String moduleName) {
		DetachedCriteria dc = DetachedCriteria.forClass(TModule.class);
		if (!StringUtils.isEmpty(moduleName)) {
			dc.add(Restrictions.like("moduleName", moduleName, MatchMode.ANYWHERE));
		}
		List  list = baseDao.queryByCriteria(dc, true, pageNo, pageSize);
		return list;
	}
	
	/**
	 * 更新或保存记录
	 * @param module
	 */
	@Transactional
	public void saveOrUpdate(TModule module){
		baseDao.saveOrUpdate(module);
	}
	
	public List<TModule> findAll(){
		return  moduleDAO.findAll();
	}
	
	public BaseDao<TModule> getBaseDao() {
		return baseDao;
	}
	public void setBaseDao(BaseDao<TModule> baseDao) {
		this.baseDao = baseDao;
	}
	public TModuleDAO getModuleDAO() {
		return moduleDAO;
	}
	public void setModuleDAO(TModuleDAO moduleDAO) {
		this.moduleDAO = moduleDAO;
	}

	/**
	 * 删除模块
	 * @param module
	 */
	@Transactional
	public void delete(TModule module){
		baseDao.delete(module);
	}
	
	/**
	 * 根据id查找模块
	 * @param moduleId
	 * @return
	 */
	public TModule findById(Integer moduleId) {
		return baseDao.findById(moduleId);
		 
	}
	
	
	
}
