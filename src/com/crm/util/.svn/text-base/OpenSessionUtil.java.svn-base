package com.crm.util;

import org.hibernate.FlushMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.orm.hibernate3.SessionFactoryUtils;
import org.springframework.orm.hibernate3.support.OpenSessionInViewFilter;

public class OpenSessionUtil extends OpenSessionInViewFilter {

	@Override
	protected Session getSession(SessionFactory sessionFactory)
			throws DataAccessResourceFailureException {
		Session session = SessionFactoryUtils.getSession(sessionFactory, true);
		FlushMode flushMode = getFlushMode();
		if (flushMode != null)
			session.setFlushMode(FlushMode.COMMIT);
		return session;
	}

}
