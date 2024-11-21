import React from 'react';
import { GlobeIcon, HeartIcon, Thermometer } from 'lucide-react';
import { GiLabCoat } from "react-icons/gi";
import { BiBlanket } from "react-icons/bi";
import { LuHelpingHand } from "react-icons/lu";

const HowToHelp = () => {
	const helpOptions = [
		{
			icon: <GiLabCoat className='w-12 h-12 text-winter-600' />,
			title: 'Winter Clothing Donation',
			description:
				'Donate warm clothes, sweaters, jackets, and winter wear for children and adults.',
		},
		{
			icon: <BiBlanket className='w-12 h-12 text-winter-600' />,
			title: 'Blanket & Warmth Supplies',
			description:
				'Provide thermal blankets, sleeping bags, and warm bedding to protect against cold.',
		},
		{
			icon: <LuHelpingHand className='w-12 h-12 text-winter-600' />,
			title: 'Financial Contributions',
			description:
				'Monetary donations help purchase essential winter survival items directly.',
		},
	];

	const charityPartners = [
		'BRAC Bangladesh',
		'Islamic Relief Bangladesh',
		'Save the Children Bangladesh',
		'ActionAid Bangladesh',
	];

	return (
		<div className='min-h-screen bg-blue-50 py-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-winter-900 mb-4'>
						Winter Relief for Bangladesh's Most Vulnerable
					</h1>
					<p className='text-xl text-gray-700 max-w-2xl mx-auto'>
						Millions of people in Bangladesh struggle to survive harsh winter
						conditions. Your support can save lives.
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8 mb-16'>
					{helpOptions.map((option, index) => (
						<div
							key={index}
							className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all'>
							<div className='flex justify-center mb-4'>{option.icon}</div>
							<h3 className='text-xl font-semibold mb-3'>{option.title}</h3>
							<p className='text-gray-600'>{option.description}</p>
						</div>
					))}
				</div>

				<div className='bg-white rounded-lg shadow-md p-8 mb-16'>
					<h2 className='text-3xl font-bold text-blue-900 mb-6'>
						How Your Help Makes a Difference
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						<div>
							<Thermometer className='w-16 h-16 text-charity-600 mb-4' />
							<p className='text-gray-700'>
								Winter temperatures in rural Bangladesh can drop to 8-10°C,
								posing severe risks to children, elderly, and marginalized
								communities.
							</p>
						</div>
						<div>
							<HeartIcon className='w-16 h-16 text-charity-600 mb-4' />
							<p className='text-gray-700'>
								Many families live in temporary shelters or flood-prone areas,
								lacking basic winter protection and warm clothing.
							</p>
						</div>
					</div>
				</div>

				<div className='text-center'>
					<h2 className='text-3xl font-bold text-blue-900 mb-6'>
						Trusted Charity Partners
					</h2>
					<div className='flex flex-wrap justify-center gap-4'>
						{charityPartners.map((partner, index) => (
							<div
								key={index}
								className='bg-white px-6 py-3 rounded-full shadow-md inline-flex items-center'>
								<GlobeIcon className='w-5 h-5 mr-2 text-blue-600' />
								{partner}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowToHelp;
