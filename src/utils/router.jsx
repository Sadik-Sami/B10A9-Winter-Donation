import Layout from '@/components/Layout';
import PrivateRoute from '@/components/PrivateRoute';
import Auth from '@/pages/Auth';
import Campaign from '@/pages/Campaign';
import Campaigns from '@/pages/Campaigns';
import Dashboard from '@/pages/Dashboard';
import Error from '@/pages/Error';
import ForgotPassword from '@/pages/ForgotPassword';
import Home from '@/pages/Home';
import HowToHelp from '@/pages/HowToHelp';
import UpdateProfile from '@/pages/UpdateProfile';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/campaigns',
				element: <Campaigns />,
			},
			{
				path: '/login',
				element: <Auth />,
			},
			{
				path: '/donate/:id',
				element: (
					<PrivateRoute>
						<Campaign />
					</PrivateRoute>
				),
			},
			{
				path: '/how-to-help',
				element: <HowToHelp />,
			},
			{
				path: '/dashboard',
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
			},
			{
				path: '/updateProfile',
				element: (
					<PrivateRoute>
						<UpdateProfile />
					</PrivateRoute>
				),
			},
			{
				path: '/forgot-password',
				element: <ForgotPassword />,
			},
		],
	},
]);
export default router;
