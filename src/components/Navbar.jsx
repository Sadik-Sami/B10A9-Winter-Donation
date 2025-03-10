import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, LogOut, User, Edit } from 'lucide-react';
import { FaSnowflake } from 'react-icons/fa';
import { AuthContext } from '@/context/AuthContext';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { logOut, user } = useContext(AuthContext);
	const [isScrolled, setIsScrolled] = useState(false);
	const navigate = useNavigate();

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Donation Campaigns', href: '/campaigns' },
		{ name: 'How to Help', href: '/how-to-help' },
		{ name: 'Dashboard', href: '/dashboard' },
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleLogout = () => {
		setIsLoggedIn(false);
		navigate('/');
	};

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-300 ease-in-out rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 ${
				isScrolled
					? 'bg-winter-700 shadow-lg border-b-snow-50'
					: 'bg-snow-50/30'
			}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					<div className='flex-shrink-0 flex items-center'>
						<NavLink to='/'>
							<FaSnowflake
								className={`h-8 w-8 ${
									isScrolled ? 'text-snow-50' : 'text-winter-700'
								}`}
							/>
						</NavLink>
					</div>
					<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
						{navLinks.map((link) => (
							<NavLink
								key={link.name}
								to={link.href}
								className={({ isActive }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300 ${
										isActive
											? isScrolled
												? 'border-warmth-400 text-snow-50'
												: 'border-winter-600 text-winter-800'
											: isScrolled
											? 'border-transparent text-snow-200 hover:border-snow-200 hover:text-snow-50'
											: 'border-transparent text-winter-600 hover:border-winter-300 hover:text-winter-800'
									}`
								}>
								{link.name}
							</NavLink>
						))}
					</div>
					<div className='hidden sm:ml-6 sm:flex sm:items-center'>
						{user ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant='ghost'
										className={`relative w-fit rounded-full ${
											isScrolled
												? 'bg-winter-600 text-snow-50'
												: 'bg-transparent text-winter-600'
										} text-sm focus:outline-none focus:ring-2 focus:ring-snow-50 focus:ring-offset-2 focus:ring-offset-winter-600`}>
										<span className='sr-only'>Open user menu</span>
										<Avatar>
											<AvatarImage src={user.photoURL} alt='User' />
											<AvatarFallback>
												{user?.displayName.charAt(0) || 'U'}
											</AvatarFallback>
										</Avatar>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className='w-56' align='end' forceMount>
									<DropdownMenuLabel className='font-normal'>
										<div className='flex flex-col space-y-1'>
											<p className='text-sm font-medium leading-none'>
												{user.displayName}
											</p>
											<p className='text-xs leading-none text-muted-foreground'>
												{user.email}
											</p>
										</div>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem onClick={() => navigate('/dashboard')}>
										<User className='mr-2 h-4 w-4' />
										<span>Profile</span>
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => navigate('/updateProfile')}>
										<Edit className='mr-2 h-4 w-4' />
										<span>edit</span>
									</DropdownMenuItem>
									<DropdownMenuItem onClick={logOut}>
										<LogOut className='mr-2 h-4 w-4' />
										<span>Log out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Button
								className={`transition-colors duration-300 ${
									isScrolled
										? 'bg-warmth-500 text-snow-50 hover:bg-warmth-600'
										: 'bg-charity-600 text-snow-50 hover:bg-charity-700'
								}`}>
								<NavLink to='/login'>Login</NavLink>
							</Button>
						)}
					</div>
					<div className='-mr-2 flex items-center sm:hidden'>
						<Button
							variant='ghost'
							className={`inline-flex items-center justify-center p-2 rounded-md ${
								isScrolled
									? 'text-snow-200 hover:text-snow-50 hover:bg-winter-600'
									: 'text-winter-600 hover:text-winter-800 hover:bg-winter-100'
							} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-winter-500`}
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<span className='sr-only'>Open main menu</span>
							{isMenuOpen ? (
								<X className='block h-6 w-6' aria-hidden='true' />
							) : (
								<Menu className='block h-6 w-6' aria-hidden='true' />
							)}
						</Button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className='sm:hidden'>
					<div className='pt-2 pb-3 space-y-1'>
						{navLinks.map((link) => (
							<NavLink
								key={link.name}
								to={link.href}
								className={({ isActive }) =>
									`block pl-3 pr-4 py-2 border-l-4 transition-all ease-in-out text-base font-medium ${
										isActive
											? isScrolled
												? 'bg-winter-600 border-warmth-400 text-snow-50'
												: ' border-winter-500 text-winter-700'
											: isScrolled
											? 'border-transparent text-snow-200 hover:bg-winter-600 hover:border-snow-200 hover:text-snow-50'
											: 'border-transparent text-winter-600 hover:bg-winter-50 hover:border-winter-300 hover:text-winter-800'
									}`
								}>
								{link.name}
							</NavLink>
						))}
					</div>
					<div className='pt-4 pb-3 border-t border-winter-200'>
						{user ? (
							<div className='flex items-center px-4'>
								<div className='flex-shrink-0'>
									<Avatar>
										<AvatarImage src={user.photoURL} alt='User' />
										<AvatarFallback>U</AvatarFallback>
									</Avatar>
								</div>
								<div className='ml-3'>
									<div
										className={`text-base font-medium ${
											isScrolled ? 'text-snow-50' : 'text-winter-800'
										}`}>
										{user.displayName}
									</div>
									<div
										className={`text-sm font-medium ${
											isScrolled ? 'text-snow-200' : 'text-winter-600'
										}`}>
										{user.email}
									</div>
								</div>
								<Button
									onClick={logOut}
									className={`ml-auto ${
										isScrolled
											? 'bg-winter-600 text-snow-50 hover:bg-winter-500'
											: 'bg-winter-100 text-winter-800 hover:bg-winter-200'
									}`}>
									Log out
								</Button>
							</div>
						) : (
							<div className='mt-3 space-y-1'>
								<Button
									className={`w-full ${
										isScrolled
											? 'bg-warmth-500 text-snow-50 hover:bg-warmth-600'
											: 'bg-charity-600 text-snow-50 hover:bg-charity-700'
									}`}>
									<NavLink to='/login'>Login</NavLink>
								</Button>
							</div>
						)}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
