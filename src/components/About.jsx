import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Snowflake } from 'lucide-react';

const About = () => {
	return (
		<section className='py-16 bg-winter-50'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-winter-800 mb-4'>
						Bringing Warmth to Those in Need
					</h2>
					<p className='text-winter-600 text-lg'>
						Our mission is to ensure that no one faces the harsh winter without
						adequate protection and support.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
					<div className='bg-snow-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl'>
						<Snowflake className='w-12 h-12 text-winter-600 mb-4' />
						<h3 className='text-xl font-semibold text-winter-800 mb-2'>
							Winter Essentials
						</h3>
						<p className='text-winter-600'>
							We provide warm clothing, blankets, and heating supplies to those
							struggling in cold weather.
						</p>
					</div>
					<div className='bg-snow-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl'>
						<Users className='w-12 h-12 text-winter-600 mb-4' />
						<h3 className='text-xl font-semibold text-winter-800 mb-2'>
							Community Support
						</h3>
						<p className='text-winter-600'>
							We organize local volunteers to distribute supplies and offer
							assistance to vulnerable communities.
						</p>
					</div>
					<div className='bg-snow-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl'>
						<Heart className='w-12 h-12 text-winter-600 mb-4' />
						<h3 className='text-xl font-semibold text-winter-800 mb-2'>
							Compassionate Care
						</h3>
						<p className='text-winter-600'>
							We provide emotional support and resources to help individuals and
							families through difficult times.
						</p>
					</div>
				</div>

				<div className='bg-winter-100 p-8 rounded-lg shadow-lg'>
					<h3 className='text-2xl font-bold text-winter-800 mb-4'>
						How You Can Help
					</h3>
					<ul className='space-y-4 mb-6'>
						<li className='flex items-start'>
							<ArrowRight className='w-5 h-5 text-charity-600 mr-2 mt-1 flex-shrink-0' />
							<span className='text-winter-700'>
								Donate winter clothing, blankets, or funds to support our
								campaigns
							</span>
						</li>
						<li className='flex items-start'>
							<ArrowRight className='w-5 h-5 text-charity-600 mr-2 mt-1 flex-shrink-0' />
							<span className='text-winter-700'>
								Volunteer your time to help distribute supplies and support
								local events
							</span>
						</li>
						<li className='flex items-start'>
							<ArrowRight className='w-5 h-5 text-charity-600 mr-2 mt-1 flex-shrink-0' />
							<span className='text-winter-700'>
								Spread awareness about our mission on social media and in your
								community
							</span>
						</li>
						<li className='flex items-start'>
							<ArrowRight className='w-5 h-5 text-charity-600 mr-2 mt-1 flex-shrink-0' />
							<span className='text-winter-700'>
								Organize a fundraising event or winter clothing drive in your
								area
							</span>
						</li>
					</ul>
					<div className='flex justify-center'>
						<Button className='bg-charity-600 hover:bg-charity-700 text-snow-50 px-6 py-2 text-lg'>
							Get Involved Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
