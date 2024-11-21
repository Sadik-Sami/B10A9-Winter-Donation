import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Calendar, Users, Mail, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Loading from '@/components/Loading';
import { AuthContext } from '@/context/AuthContext';

const Campaign = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm();
	const { toast } = useToast();
	const campaign = useLoaderData();
	const [currentCampaign, setCurrentCampaign] = useState(null);
	const { loading } = useContext(AuthContext);
	useEffect(() => {
		const currentCampaign = campaign.find((c) => c.id === parseInt(id));
		setCurrentCampaign(currentCampaign);
	}, [id]);

	const onSubmit = (data) => {
		console.log(data);
		toast({
			title: 'Thank you!',
			description: 'We will reach your destination soon.',
		});
		reset();
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			<Toaster />
			{!currentCampaign || loading ? (
				<Loading />
			) : (
				<div>
					<Card className='mb-8'>
						<CardHeader>
							<CardTitle>{currentCampaign.title}</CardTitle>
							<CardDescription>{currentCampaign.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='aspect-video relative overflow-hidden rounded-lg'>
									<img
										src={currentCampaign.image}
										alt={currentCampaign.title}
										className='absolute inset-0 w-full h-full object-cover'
									/>
								</div>
								<div className='space-y-4'>
									<div className='flex items-center space-x-2 text-winter-600'>
										<MapPin className='w-5 h-5' />
										<span>{currentCampaign.division}</span>
									</div>
									<div className='flex items-center space-x-2 text-winter-600'>
										<Calendar className='w-5 h-5' />
										<span>Campaign ends on {currentCampaign.endDate}</span>
									</div>
									<div className='flex items-center space-x-2 text-winter-600'>
										<Users className='w-5 h-5' />
										<span>{currentCampaign.beneficiaries} beneficiaries</span>
									</div>
									<div className='flex items-center space-x-2 text-winter-600'>
										<Mail className='w-5 h-5' />
										<span>{currentCampaign.contactInfo}</span>
									</div>
									<div className='flex items-center space-x-2 text-winter-600'>
										<CheckCircle className='w-5 h-5' />
										<span>Campaign Status:</span>
										<Badge
											variant={
												campaign.status === 'Urgent' ? 'destructive' : 'default'
											}
											className='text-xs font-semibold'>
											{currentCampaign.status}
										</Badge>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Make a Donation</CardTitle>
							<CardDescription>
								Fill out the form below to contribute to this campaign
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div className='space-y-2'>
										<Label htmlFor='quantity'>Quantity of items</Label>
										<Input
											id='quantity'
											type='number'
											{...register('quantity', { required: true, min: 1 })}
										/>
										{errors.quantity && (
											<span className='text-red-500'>
												This field is required
											</span>
										)}
									</div>
									<div className='space-y-2'>
										<Label htmlFor='itemType'>Item type</Label>
										<Controller
											name='itemType'
											control={control}
											rules={{ required: true }}
											render={({ field }) => (
												<Select
													onValueChange={field.onChange}
													value={field.value}>
													<SelectTrigger>
														<SelectValue placeholder='Select item type' />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value='blanket'>Blanket</SelectItem>
														<SelectItem value='jacket'>Jacket</SelectItem>
														<SelectItem value='sweater'>Sweater</SelectItem>
													</SelectContent>
												</Select>
											)}
										/>
										{errors.itemType && (
											<span className='text-red-500'>
												This field is required
											</span>
										)}
									</div>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='pickupLocation'>Pickup location</Label>
									<Input
										id='pickupLocation'
										{...register('pickupLocation', { required: true })}
									/>
									{errors.pickupLocation && (
										<span className='text-red-500'>This field is required</span>
									)}
								</div>
								<div className='space-y-2'>
									<Label htmlFor='notes'>Additional notes (optional)</Label>
									<Textarea id='notes' {...register('notes')} />
								</div>
								<Button
									type='submit'
									className='w-full bg-charity-600 hover:bg-charity-700 text-snow-50'>
									Submit Donation
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	);
};

export default Campaign;
