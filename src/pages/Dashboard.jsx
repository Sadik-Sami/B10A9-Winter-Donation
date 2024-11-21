import React, { useContext } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AuthContext } from '@/context/AuthContext';

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	
	return (
		<div className='container mx-auto px-4 py-8'>
			<Card className='mb-8'>
				<CardHeader>
					<CardTitle className='text-2xl font-bold text-center text-primary-800'>
						Welcome to Winter Donation, {user?.displayName}!
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col md:flex-row items-center justify-between gap-20'>
					<div className='flex flex-col items-center gap-8'>
						<Avatar className='w-64 h-64 outline outline-2 outline-offset-4 outline-winter-600'>
							<AvatarImage
								src={user?.photoURL || '/placeholder.svg?height=64&width=64'}
								alt={user?.displayName}
							/>
							<AvatarFallback>{user?.displayName.charAt(0)}</AvatarFallback>
						</Avatar>
						<div>
							<p className='text-lg font-semibold'>{user?.displayName}</p>
							<p className='text-sm text-gray-600'>{user?.email}</p>
						</div>
					</div>
					<Button className='bg-charity-600 hover:bg-charity-700 text-white'>
						<NavLink to='/updateProfile'>Update Profile</NavLink>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default Dashboard;
