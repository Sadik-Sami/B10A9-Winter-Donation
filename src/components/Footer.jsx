import React from 'react';
import {
	Facebook,
	Twitter,
	Instagram,
	Mail,
	Phone,
	MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Footer = () => {
	return (
		<footer className='bg-winter-800 text-snow-100'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
				<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
					<div className='grid grid-cols-2 gap-8 xl:col-span-2'>
						<div className='md:grid md:grid-cols-2 md:gap-8'>
							<div>
								<h3 className='text-sm font-semibold text-warmth-400 tracking-wider uppercase'>
									About Us
								</h3>
								<ul className='mt-4 space-y-4'>
									<li>
										<a
											href='#'
											className='text-base text-snow-300 hover:text-snow-100'>
											Our Mission
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-base text-snow-300 hover:text-snow-100'>
											Impact
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-base text-snow-300 hover:text-snow-100'>
											Team
										</a>
									</li>
								</ul>
							</div>
							<div className='mt-12 md:mt-0'>
								<h3 className='text-sm font-semibold text-warmth-400 tracking-wider uppercase'>
									Support
								</h3>
								<ul className='mt-4 space-y-4'>
									<li>
										<a
											href='#'
											className='text-base text-snow-300 hover:text-snow-100'>
											FAQ
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-base text-snow-300 hover:text-snow-100'>
											Contact Us
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-base text-snow-300 hover:text-snow-100'>
											Donate
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='mt-8 xl:mt-0'>
						<h3 className='text-sm font-semibold text-warmth-400 tracking-wider uppercase'>
							Subscribe to our newsletter
						</h3>
						<p className='mt-4 text-base text-snow-300'>
							Get the latest updates on our winter campaigns and how you can
							help.
						</p>
						<form className='mt-4 sm:flex sm:max-w-md'>
							<Input
								type='email'
								name='email-address'
								id='email-address'
								required
								placeholder='Enter your email'
								className='w-full px-5 py-3 placeholder-snow-500 focus:ring-warmth-500 focus:border-warmth-500 sm:max-w-xs border-snow-300 rounded-md'
							/>
							<div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
								<Button
									type='submit'
									className='w-full bg-charity-600 hover:bg-charity-700 text-snow-100 rounded-md py-2 px-4'>
									Subscribe
								</Button>
							</div>
						</form>
					</div>
				</div>
				<div className='mt-8 border-t border-winter-700 pt-8 md:flex md:items-center md:justify-between'>
					<div className='flex space-x-6 md:order-2'>
						<a href='#' className='text-snow-400 hover:text-snow-300'>
							<span className='sr-only'>Facebook</span>
							<Facebook className='h-6 w-6' aria-hidden='true' />
						</a>
						<a href='#' className='text-snow-400 hover:text-snow-300'>
							<span className='sr-only'>Twitter</span>
							<Twitter className='h-6 w-6' aria-hidden='true' />
						</a>
						<a href='#' className='text-snow-400 hover:text-snow-300'>
							<span className='sr-only'>Instagram</span>
							<Instagram className='h-6 w-6' aria-hidden='true' />
						</a>
					</div>
					<p className='mt-8 text-base text-snow-400 md:mt-0 md:order-1'>
						&copy; 2023 Winter Warmth Charity. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
