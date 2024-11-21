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
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { AuthContext } from '@/context/AuthContext';

const UpdateProfile = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { toast } = useToast();
	const { userName, userPhoto, user, setLoading } = useContext(AuthContext);
	const [isLogin, setIsLogin] = useState(false);
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
			if (user) {
				if (formData.photoUrl) {
					await userPhoto(formData.photoUrl);
				}
				if (formData.name) {
					await userName(formData.name);
				}
				setLoading(false);
			}
			toast({
				title: `Profile updated successfully ${user.displayName}`,
				description: 'Welcome to Winter Donation!',
			});
			navigate('/dashboard');
		} catch (error) {
			toast({
				title: 'Authentication Error',
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
					<CardTitle>Update Profile</CardTitle>
					<CardDescription>Update your profile information</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
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
						<Button
							type='submit'
							className='w-full bg-charity-600 hover:bg-charity-700 text-snow-50'>
							Update
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default UpdateProfile;
