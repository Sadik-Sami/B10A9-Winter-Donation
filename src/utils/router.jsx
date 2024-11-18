import Layout from '@/components/Layout';
import Error from '@/pages/Error';
import { Home } from 'lucide-react';
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
		],
	},
]);
