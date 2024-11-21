import Layout from '@/components/Layout';
import PrivateRoute from '@/components/PrivateRoute';
import Auth from '@/pages/Auth';
import Campaign from '@/pages/Campaign';
import Campaigns from '@/pages/Campaigns';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
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
				loader: async () => {
					const response = await fetch('/src/assets/data.json');
					const data = await response.json();
					return data;
				},
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
				loader: async () => {
					const response = await fetch('/src/assets/data.json');
					const data = await response.json();
					return data;
				},
			},
			{
				path: '/how-to-help',
				element: <h1>How to Help</h1>,
			},
			{
				path: '/dashboard',
				element: <h1>Dashboard</h1>,
			},
		],
	},
]);
export default router;
