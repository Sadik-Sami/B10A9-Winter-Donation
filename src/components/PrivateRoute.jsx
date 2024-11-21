import { AuthContext } from '@/context/AuthContext';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';
// import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return <Loading />;
	}
	if (user) {
		// Redirect to the login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.x
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
