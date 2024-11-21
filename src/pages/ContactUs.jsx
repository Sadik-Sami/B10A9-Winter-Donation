import React, { useState } from 'react';
import {
	MapPinIcon,
	MailIcon,
	PhoneIcon,
	SendIcon,
	UserIcon,
	MessageSquareIcon,
} from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const contactInfo = [
		{
			icon: <MapPinIcon className='w-6 h-6 text-charity-600' />,
			title: 'Address',
			description: 'Winter Donation HQ, Dhaka, Bangladesh',
		},
		{
			icon: <MailIcon className='w-6 h-6 text-charity-600' />,
			title: 'Email',
			description: 'support@winterdonation.org',
		},
		{
			icon: <PhoneIcon className='w-6 h-6 text-charity-600' />,
			title: 'Phone',
			description: '+880 1234 567890',
		},
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}
		if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
		if (!formData.message.trim()) newErrors.message = 'Message is required';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			setIsSubmitting(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 2000));

				toast({
					title: 'Message Sent Successfully',
					description: "We'll get back to you soon!",
				});

				setFormData({ name: '', email: '', subject: '', message: '' });
			} catch (error) {
				toast({
					title: 'Submission Failed',
					description: 'Please try again later.',
					variant: 'destructive',
				});
			} finally {
				setIsSubmitting(false);
			}
		} else {
			toast({
				title: 'Form Validation Error',
				description: 'Please check the form fields.',
				variant: 'destructive',
			});
		}
	};

	return (
		<div className='min-h-screen bg-winter-50 py-16 px-4'>
			<Toaster />
			<div className='container mx-auto grid md:grid-cols-2 gap-12'>
				<div className='bg-white p-8 rounded-lg shadow-lg'>
					<h2 className='text-3xl font-bold text-winter-700 mb-6'>
						Get In Touch
					</h2>
					<p className='text-gray-600 mb-8'>
						Have questions about our winter relief efforts? We're here to help.
					</p>

					<div className='space-y-6'>
						{contactInfo.map((info, index) => (
							<div key={index} className='flex items-center space-x-4'>
								{info.icon}
								<div>
									<h3 className='font-semibold text-winter-800'>
										{info.title}
									</h3>
									<p className='text-gray-600'>{info.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className='mt-12 border-t pt-6 text-center'>
						<p className='text-gray-500'>
							We aim to respond to all inquiries within 24 hours.
						</p>
					</div>
				</div>
				<div className='bg-white p-8 rounded-lg shadow-lg'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label className='block mb-2 text-winter-700 font-semibold'>
								Your Name
							</label>
							<div className='relative'>
								<UserIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleChange}
									className='w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-charity-500'
									placeholder='Enter your name'
								/>
							</div>
							{errors.name && (
								<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
							)}
						</div>

						<div>
							<label className='block mb-2 text-winter-700 font-semibold'>
								Email Address
							</label>
							<div className='relative'>
								<MailIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className='w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-charity-500'
									placeholder='Enter your email'
								/>
							</div>
							{errors.email && (
								<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
							)}
						</div>

						<div>
							<label className='block mb-2 text-winter-700 font-semibold'>
								Subject
							</label>
							<div className='relative'>
								<MessageSquareIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								<input
									type='text'
									name='subject'
									value={formData.subject}
									onChange={handleChange}
									className='w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-charity-500'
									placeholder='Enter subject'
								/>
							</div>
							{errors.subject && (
								<p className='text-red-500 text-sm mt-1'>{errors.subject}</p>
							)}
						</div>

						<div>
							<label className='block mb-2 text-winter-700 font-semibold'>
								Your Message
							</label>
							<textarea
								name='message'
								value={formData.message}
								onChange={handleChange}
								rows='5'
								className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-charity-500'
								placeholder='Write your message here...'
							/>
							{errors.message && (
								<p className='text-red-500 text-sm mt-1'>{errors.message}</p>
							)}
						</div>

						<button
							type='submit'
							disabled={isSubmitting}
							className='w-full bg-charity-600 text-white p-3 rounded-lg hover:bg-charity-700 transition-colors flex items-center justify-center'>
							{isSubmitting ? (
								<span>Sending...</span>
							) : (
								<>
									<SendIcon className='mr-2' /> Send Message
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
