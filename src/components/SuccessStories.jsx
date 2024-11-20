import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const SuccessStories = () => {
	const stories = [
		{
			name: 'Rahima Begum',
			location: 'Rangpur',
			image: '/placeholder.svg?height=100&width=100',
			quote:
				"The warm blankets we received made a world of difference for my family this winter. We're so grateful for the support.",
		},
		{
			name: 'Abdul Karim',
			location: 'Sylhet',
			image: '/placeholder.svg?height=100&width=100',
			quote:
				'Thanks to the winter clothing donation, my children can now attend school comfortably even on the coldest days.',
		},
		{
			name: 'Fatima Akter',
			location: 'Dhaka',
			image: '/placeholder.svg?height=100&width=100',
			quote:
				'The heater provided by the Winter Warmth campaign has made our small home cozy and livable during harsh winter nights.',
		},
	];

	return (
		<section className='py-16 bg-winter-100'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-winter-800 mb-12'>
					Success Stories
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{stories.map((story, index) => (
						<Card
							key={index}
							className='bg-snow-50 border-winter-200 hover:shadow-lg transition-shadow duration-300'>
							<CardHeader className='flex flex-col items-center'>
								<Avatar className='w-24 h-24 mb-4'>
									<AvatarImage src={story.image} alt={story.name} />
									<AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
								</Avatar>
								<CardTitle className='text-xl font-semibold text-winter-800'>
									{story.name}
								</CardTitle>
								<p className='text-winter-600'>{story.location}</p>
							</CardHeader>
							<CardContent className='text-center'>
								<Quote className='w-8 h-8 text-winter-400 mx-auto mb-4' />
								<p className='text-winter-700 italic'>{story.quote}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
