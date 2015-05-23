package com.crm.biz;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.crm.dao.BaseDao;
import com.crm.vo.TModule;
import com.crm.vo.TRole;
import com.crm.vo.TUser;

public class UserBiz {
private BaseDao<TUser> baseDao;
/**
 * 用户登录
 * @param loginName 输入的用户名
 * @param password 输入的密码
 * @return
 */
public TUser login(String loginName,String password){
		DetachedCriteria dc=DetachedCriteria.forClass(TUser.class);
		Map<String, String> map = new HashMap<String, String>();
		// 第一个参数是查询对象的属性，第二个参数是要查询的值
		map.put("loginName", loginName);
		map.put("password", password);
		dc.add(Restrictions.allEq(map));
		List<TUser> users = baseDao.queryByCriteria(dc, false, 0, 0);
		return users.isEmpty() ? null : users.get(0);
	}

	public BaseDao<TUser> getBaseDao() {
		return baseDao;
	}
	
	public void setBaseDao(BaseDao<TUser> baseDao) {
		this.baseDao = baseDao;
	}
	
	public void createTreeJs(TUser loginUser) {
		// 1 取得项目路径
		String realPath = ServletActionContext.getServletContext().getRealPath(
				"/");
		// System.out.println("realPath>>>" + realPath);
		String filePath = realPath + "data/";
		// System.out.println("filePath>>>" + filePath);
		// 创建js文件
		configureUserInfo(loginUser, filePath);
	}

	/**
	 * 创建文件
	 * 
	 * @param loginUser
	 *            登录用户
	 * @param filePath
	 *            文件的路径
	 */
	private void configureUserInfo(TUser loginUser, String filePath) {
		// 取得用户的角色，有可能有多个角色
		Set<TRole> roles = loginUser.getRoles();
		StringBuffer sb = new StringBuffer();
		// 有这样一个js文件dtree.js
		sb.append(" d = new dTree('d'); \n");
		// 根菜单，最顶级
		sb.append(" d.add(0,-1,'客户关系管理系统'); \n ");
		// 用来去掉重复的模块ID
		Set<Integer> moduleIds = new HashSet<Integer>();
		for (TRole role : roles) {
			// 一个用户拥有多个角色(权限)，
			// 每个角色下面有很多模块
			Set<TModule> modules = role.getModules();
			for (TModule module : modules) {
				// 如果菜单已经被禁用，0表示禁用
				if (module.getMenuFlag().equals("0")) {
					continue;
				}
				if (!moduleIds.contains(module.getModuleId())) {
					sb.append(" d.add(" + module.getModuleId() + ",");
					sb.append(module.getUpperModuleId() + ",'");
					// navigate是点击菜单提交的路径，在页面中有此js方法
					sb.append(module.getModuleName() + "',"
							+ "\"javascript:navigate('");
					sb.append(module.getUrl());
					sb.append("')\");  \n");
				}
				// 将模块id添加到集合moduleIds中
				moduleIds.add(module.getModuleId());
			}
		}
		sb.append(" document.write(d);  \n");// 输出代码
		// System.out.println("sb>>" + sb.toString());
		// 根据字符串来创建文件，根据用户的id来创建js文件
		saveStringToFile(filePath, loginUser.getUserId() + ".js", sb.toString());
	}

	/**
	 * 在指定的路径下创建js文件
	 * 
	 * @param filePath
	 *            指定的路径
	 * @param fileName
	 *            js文件
	 * @param fileContent
	 *            文件的内容
	 */
	private void saveStringToFile(String filePath, String fileName,
			String fileContent) {
		try {
			File file = new File(filePath);
			file.mkdirs();// 如果文件夹不存在就创建
			String path = filePath + fileName;// 获得要写入的文件路径
			FileOutputStream fos = new FileOutputStream(path);
			BufferedOutputStream bos = new BufferedOutputStream(fos);
			bos.write(fileContent.getBytes());
			bos.flush();
			bos.close();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
	
	/**
	 * 分页查询
	 * @param pageNo
	 * @param pageSize
	 * @param workNo
	 * @param loginName
	 * @return
	 */
	public List<TUser> list(int pageNo, int pageSize,String workNo, String loginName) {
		DetachedCriteria dc = DetachedCriteria.forClass(TUser.class);
		if (!StringUtils.isEmpty(workNo)) {
			dc.add(Restrictions.like("workNo", workNo, MatchMode.ANYWHERE));
		}
		if (!StringUtils.isEmpty(loginName)) {
			dc.add(Restrictions.like("loginName", loginName, MatchMode.ANYWHERE));
		}
		dc.addOrder(Order.asc("userId"));
		List<TUser> list = baseDao.queryByCriteria(dc, true, pageNo, pageSize);
		return list;
	}
	
	//ajax检查用户名是否存在
	public String check_loginname(String loginName){
		DetachedCriteria dc=DetachedCriteria.forClass(TUser.class);
		dc.add(Restrictions.eq("loginName", loginName));
		List list =baseDao.queryByCriteria(dc, false, 0, 0);
		return list.isEmpty()?"此用户可用":"此用户已存在";
	}
	
	/**
	 * 根据id查找用户
	 * @param userId
	 */
	public TUser findById(Integer userId){
		return baseDao.findById(userId);
	}
	
	/**
	 * 保存或更新用户
	 * @param user
	 */
	@Transactional
	public void saveOrUpdate(TUser user) {
		baseDao.saveOrUpdate(user);		
	}
	
	/**
	 * 删除用户记录
	 * @param user
	 */
	@Transactional
	public void deleteById(TUser user) {
		baseDao.delete(user);
	}
		
}
