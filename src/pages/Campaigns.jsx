import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
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
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { MapPin, Mail, Search, Filter } from 'lucide-react';

const Campaigns = () => {
	const campaigns = useLoaderData();
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');
	const [filterDivision, setFilterDivision] = useState('all');

	const divisions = ['all', ...new Set(campaigns.map((c) => c.division))];

	const filteredCampaigns = campaigns.filter(
		(campaign) =>
			campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(filterDivision === 'all' || campaign.division === filterDivision)
	);

	return (
		<div className='min-h-screen bg-gradient-to-b from-winter-50 to-winter-100 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold text-center text-winter-800 mb-8'>
					Active Donation Campaigns
				</h1>
				<p className='text-center text-winter-600 mb-12 max-w-2xl mx-auto'>
					Join our mission to bring warmth and comfort to those in need across
					Bangladesh. Every donation makes a difference in someone's life this
					winter.
				</p>

				<div className='flex flex-col md:flex-row gap-4 mb-8'>
					<div className='relative flex-grow'>
						<Input
							type='text'
							placeholder='Search campaigns...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='pl-10 bg-snow-50 border-winter-200 focus:border-winter-400 focus:ring-winter-400'
						/>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-winter-400' />
					</div>
					<div className='relative w-full md:w-64 select-no-arrow'>
						<Select onValueChange={setFilterDivision} value={filterDivision}>
							<SelectTrigger className='bg-snow-50 border-winter-200 focus:border-winter-400 focus:ring-winter-400 pr-10'>
								<SelectValue placeholder='Filter by division' />
							</SelectTrigger>
							<SelectContent>
								{divisions.map((division) => (
									<SelectItem key={division} value={division}>
										{division === 'all' ? 'All Divisions' : division}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Filter className='absolute right-3 top-1/2 transform -translate-y-1/2 text-winter-400 pointer-events-none' />
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredCampaigns.map((campaign) => (
						<Card
							key={campaign.id}
							className='flex flex-col overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-snow-50 border-winter-200'>
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

				{filteredCampaigns.length === 0 && (
					<div className='text-center text-winter-600 mt-12'>
						<p>No campaigns found. Please try a different search or filter.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Campaigns;
