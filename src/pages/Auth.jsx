import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { AuthContext } from '@/context/AuthContext';

const Auth = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { toast } = useToast();
	const { createUser, signIn, userName, userPhoto, signInWithGoogle, user } =
		useContext(AuthContext);
	const [isLogin, setIsLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		photoUrl: '',
		password: '',
	});
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (name === 'password') {
			validatePassword(value);
		}
		if (name === 'email') {
			validateEmail(value);
		}
	};

	const validatePassword = (password) => {
		const errors = [];
		if (!/[A-Z]/.test(password)) errors.push('Must have an uppercase letter');
		if (!/[a-z]/.test(password)) errors.push('Must have a lowercase letter');
		if (password.length < 6)
			errors.push('Length must be at least 6 characters');
		setErrors((prev) => ({ ...prev, password: errors }));
	};

	const validateEmail = (email) => {
		const isValid = /\S+@\S+\.\S+/.test(email);
		setErrors((prev) => ({
			...prev,
			email: isValid ? null : 'Invalid email format',
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Object.values(errors).some((error) => error && error.length > 0)) {
			toast({
				title: 'Error',
				description: 'Please correct the errors in the form',
				variant: 'destructive',
			});
			return;
		}

		try {
			if (isLogin) {
				await signIn(formData.email, formData.password);
			} else {
				await createUser(formData.email, formData.password);
				if (user) {
					userPhoto(formData.photoUrl);
					userName(formData.name);
				}
			}
			toast({
				title: isLogin ? 'Login Successful' : 'Registration Successful',
				description: 'Welcome to Winter Donation!',
			});
			const from = location.state?.from?.pathname || '/';
			navigate(from, { replace: true });
		} catch (error) {
			toast({
				title: 'Authentication Error',
				description: error.message,
				variant: 'destructive',
			});
		}
	};

	const handleGoogleAuth = async () => {
		try {
			await signInWithGoogle();
			toast({
				title: 'Google Authentication Successful',
				description: 'Welcome to Winter Donation!',
			});
			const from = location.state?.from?.pathname || '/';
			navigate(from, { replace: true });
		} catch (error) {
			toast({
				title: 'Google Authentication Error',
				description: error.message,
				variant: 'destructive',
			});
		}
	};

	return (
		<div className='flex items-center justify-center min-h-[600px] md:min-h-screen/2 bg-winter-100'>
			<Toaster />
			<Card className='w-full max-w-2xl md:max-w-3xl'>
				<CardHeader>
					<CardTitle>{isLogin ? 'Login' : 'Register'}</CardTitle>
					<CardDescription>
						{isLogin
							? 'Welcome back! Please login to your account.'
							: 'Create an account to start donating and making a difference.'}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						{!isLogin && (
							<>
								<div className='space-y-2'>
									<Label htmlFor='name'>Name</Label>
									<Input
										id='name'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='photoUrl'>Photo URL</Label>
									<Input
										id='photoUrl'
										name='photoUrl'
										value={formData.photoUrl}
										onChange={handleInputChange}
									/>
								</div>
							</>
						)}
						<div className='space-y-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								name='email'
								type='email'
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
							{errors.email && (
								<Alert variant='destructive'>
									<AlertTitle>Error</AlertTitle>
									<AlertDescription>{errors.email}</AlertDescription>
								</Alert>
							)}
						</div>
						<div className='space-y-2'>
							<Label htmlFor='password'>Password</Label>
							<div className='relative'>
								<Input
									id='password'
									name='password'
									type={showPassword ? 'text' : 'password'}
									value={formData.password}
									onChange={handleInputChange}
									required
								/>
								<button
									type='button'
									onClick={() => setShowPassword(!showPassword)}
									className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500'>
									{showPassword ? (
										<EyeOffIcon className='h-5 w-5' />
									) : (
										<EyeIcon className='h-5 w-5' />
									)}
								</button>
							</div>
							{errors.password && errors.password.length > 0 && (
								<Alert variant='destructive'>
									<AlertTitle>Password Requirements</AlertTitle>
									<AlertDescription>
										<ul className='list-disc pl-5'>
											{errors.password.map((error, index) => (
												<li key={index}>{error}</li>
											))}
										</ul>
									</AlertDescription>
								</Alert>
							)}
						</div>
						<Button
							type='submit'
							className='w-full bg-charity-600 hover:bg-charity-700 text-snow-50'>
							{isLogin ? 'Login' : 'Register'}
						</Button>
					</form>
				</CardContent>
				<CardFooter className='flex flex-col space-y-4'>
					<Button
						onClick={handleGoogleAuth}
						variant='outline'
						className='w-full'>
						Continue with Google
					</Button>
					<p className='text-sm text-center'>
						{isLogin ? "Don't have an account? " : 'Already have an account? '}
						<button
							onClick={() => setIsLogin(!isLogin)}
							className='text-charity-600 hover:underline'>
							{isLogin ? 'Register' : 'Login'}
						</button>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Auth;
