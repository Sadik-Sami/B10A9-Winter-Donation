import About from '@/components/About';
import CampaignContainer from '@/components/CampaignContainer';
import GetInvolved from '@/components/GetInvolved';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import SuccessStories from '@/components/SuccessStories';
import React from 'react';

const Home = () => {
	return (
		// <div className='min-h-[calc(100vh-421px)]'>
		// 	<Hero />
		// 	<Stats />
		// 	<CampaignContainer />
		// 	<About />
		// 	<HowItWorks />
		// </div>
		<div className='min-h-[var(--content-height)]'>
			<Hero />
			<Stats />
			<About />
			<HowItWorks />
			<SuccessStories />
			<CampaignContainer />
			<GetInvolved />
		</div>
	);
};

export default Home;
