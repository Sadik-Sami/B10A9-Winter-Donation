import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import campaigns from '../assets/data.json';

const CampaignContainer = () => {
	const navigate = useNavigate();
	return (
		<section className='py-16 bg-gradient-to-b from-winter-100 to-winter-200'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-winter-800 mb-8'>
					Active Donation Campaigns
				</h2>
				<p className='text-center text-winter-600 mb-12 max-w-2xl mx-auto'>
					Join our mission to bring warmth and comfort to those in need. Every
					donation makes a difference in someone's life this winter.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{campaigns.slice(0, 6).map((campaign) => (
						<Card
							key={campaign.id}
							className='flex flex-col overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-snow-50'>
							<div className='aspect-video relative overflow-hidden'>
								<img
									src={campaign.image}
									alt={campaign.title}
									className='absolute inset-0 w-full h-full object-cover'
								/>
								<div className='absolute top-0 right-0 m-4'>
									<Badge
										variant={
											campaign.status === 'Urgent' ? 'destructive' : 'default'
										}
										className='text-xs font-semibold'>
										{campaign.status}
									</Badge>
								</div>
							</div>
							<CardHeader>
								<CardTitle className='text-xl font-bold text-winter-800'>
									{campaign.title}
								</CardTitle>
								<CardDescription className='flex items-center text-winter-600'>
									<MapPin className='w-4 h-4 mr-1' />
									{campaign.division}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className='text-winter-700 line-clamp-3'>
									{campaign.description}
								</p>
							</CardContent>
							<CardFooter className='mt-auto flex justify-between items-center'>
								<div className='flex items-center text-xs text-winter-600'>
									<Mail className='w-4 h-4 mr-1' />
									<span className='truncate max-w-[150px]'>
										{campaign.contactInfo}
									</span>
								</div>
								<Button
									onClick={() => navigate(`/donate/${campaign.id}`)}
									className='bg-charity-600 hover:bg-charity-700 text-snow-50'>
									Donate Now
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className='mt-16 text-center'>
					<Button
						onClick={() => navigate('/campaigns')}
						className='bg-warmth-500 hover:bg-warmth-600 text-snow-50 text-lg px-8 py-3'>
						View All Campaigns
					</Button>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className='absolute top-0 left-0 w-32 h-32 bg-winter-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
			<div className='absolute top-0 right-0 w-32 h-32 bg-charity-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
			<div className='absolute bottom-0 left-1/2 w-32 h-32 bg-warmth-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
		</section>
	);
};

export default CampaignContainer;
