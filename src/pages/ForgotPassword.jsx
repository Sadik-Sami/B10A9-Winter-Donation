import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { AuthContext } from '@/context/AuthContext';

const ForgotPassword = () => {
	const { resetPass, setLoading } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const { toast } = useToast();
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	// Prefill email from navigation state if available
	useEffect(() => {
		if (location.state?.email) {
			setEmail(location.state.email);
		}
	}, [location.state]);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setError('');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!/\S+@\S+\.\S+/.test(email)) {
			setError('Please enter a valid email address');
			return;
		}
		resetPass(email);
		toast({
			title: 'Password Reset',
			description: 'Password reset instructions sent to your email.',
		});
	};

	return (
		<div className='flex items-center justify-center min-h-[600px] md:min-h-screen/2 bg-winter-100'>
			<Toaster />
			<Card className='w-full max-w-md'>
				<CardHeader>
					<CardTitle>Forgot Password</CardTitle>
					<CardDescription>
						Enter your email to receive password reset instructions
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								name='email'
								type='email'
								value={email}
								onChange={handleEmailChange}
								required
							/>
							{error && (
								<Alert variant='destructive'>
									<AlertTitle>Error</AlertTitle>
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}
						</div>
						<Button
							type='submit'
							className='w-full bg-charity-600 hover:bg-charity-700 text-snow-50'>
							Reset Password
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default ForgotPassword;
