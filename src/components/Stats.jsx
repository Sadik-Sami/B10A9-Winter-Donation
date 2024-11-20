import React from 'react';
import { Users, DollarSign, Home, Heart } from 'lucide-react';
import CountUp from 'react-countup';
const StatItem = ({ icon: Icon, value, label }) => (
	<div className='flex flex-col items-center p-6 bg-snow-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl'>
		<Icon className='w-12 h-12 text-winter-600 mb-4' />
		<CountUp
			end={value}
			duration={2.5}
			separator=','
			className='text-3xl font-bold text-winter-800 mb-2'
		/>
		<p className='text-winter-600 text-center'>{label}</p>
	</div>
);
const Stats = () => {
	const stats = [
		{ icon: Users, value: 50, label: 'Volunteer Teams' },
		{ icon: DollarSign, value: 500000, label: 'Donations Collected (BDT)' },
		{ icon: Home, value: 1000, label: 'Families Supported' },
		{ icon: Heart, value: 25000, label: 'Winter Items Distributed' },
	];

	return (
		<section className='py-16 bg-gradient-to-b from-winter-100 to-winter-200'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-winter-800 mb-12'>
					Our Impact So Far
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<StatItem
							key={index}
							icon={stat.icon}
							value={stat.value}
							label={stat.label}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
