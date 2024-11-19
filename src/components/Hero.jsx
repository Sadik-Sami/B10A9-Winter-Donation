import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
	return (
		<div className='relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:my-12 xl:max-w-6xl'>
			<div className='image-column w-full h-64 lg:w-1/2 lg:h-auto'>
				<img
					className='h-[600px] w-full object-cover rounded-xl'
					src='https://121clicks.com/wp-content/uploads/2021/01/winter_life_in_villages_of_bangladesh_15.jpg'
					alt='Winding mountain road in winter'
				/>
			</div>

			<div className='text-column max-w-lg bg-snow-50 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12'>
				<div className='text-wrapper flex flex-col p-12 md:px-16'>
					<h2 className='text-2xl font-semibold uppercase text-winter-900 lg:text-4xl'>
						Winter Warmth Campaign
					</h2>
					<p className='mt-4 text-winter-700'>
						Join our mission to bring warmth and comfort to those in need this
						winter season. Your donation can make a significant difference in
						the lives of vulnerable individuals and families facing harsh winter
						conditions.
					</p>
					<div className='button-container mt-8'>
						<NavLink
							to='/donate'
							className='inline-block w-full text-center text-lg font-medium text-snow-50 bg-charity-600 border-solid border-2 border-charity-700 py-4 px-10 hover:bg-charity-700 hover:shadow-md transition duration-300 ease-in-out md:w-48 hover:scale-105'>
							Donate Now
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
