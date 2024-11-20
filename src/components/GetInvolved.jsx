import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	VoteIcon as Volunteer,
	DollarSign,
	Share2,
	ShoppingBag,
} from 'lucide-react';

const GetInvolved = () => {
	const involvementOptions = [
		{
			icon: Volunteer,
			title: 'Volunteer',
			description:
				'Join our team of dedicated volunteers and make a direct impact in your community.',
			action: 'Sign Up to Volunteer',
			link: '/volunteer',
		},
		{
			icon: DollarSign,
			title: 'Donate',
			description:
				'Your financial contribution can provide warmth and comfort to those in need this winter.',
			action: 'Make a Donation',
			link: '/donate',
		},
		{
			icon: ShoppingBag,
			title: 'Donate Items',
			description:
				'Contribute winter clothing, blankets, and other essentials to our collection drives.',
			action: 'Find Collection Points',
			link: '/collection-points',
		},
		{
			icon: Share2,
			title: 'Spread the Word',
			description:
				'Share our mission on social media and help us reach more people in need.',
			action: 'Share Now',
			link: '/share',
		},
	];

	return (
		<section className='py-16 bg-gradient-to-b from-winter-50 to-winter-100'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-winter-800 mb-12'>
					Get Involved
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{involvementOptions.map((option, index) => (
						<Card
							key={index}
							className='bg-snow-50 border-winter-200 hover:shadow-lg transition-shadow duration-300'>
							<CardHeader className='text-center'>
								<div className='mx-auto bg-winter-200 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4'>
									<option.icon className='w-8 h-8 text-winter-700' />
								</div>
								<CardTitle className='text-xl font-semibold text-winter-800'>
									{option.title}
								</CardTitle>
							</CardHeader>
							<CardContent className='text-center'>
								<p className='text-winter-600 mb-4'>{option.description}</p>
								<Button
									className='bg-charity-600 hover:bg-charity-700 text-snow-50'
									onClick={() => (window.location.href = option.link)}>
									{option.action}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default GetInvolved;
