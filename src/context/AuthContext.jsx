import app from '@/Firebase/config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	getAuth,
	signOut,
	updateProfile,
	onAuthStateChanged,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleSignInProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// ? Sign In Function
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleSignInProvider);
	};
	//? Update Username and photo
	const userName = (name) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
		});
	};
	const userPhoto = (photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			photoURL: photo,
		});
	};

	//? Log Out
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// ? Auth State Observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			// console.log('Auth State Observer Detected A Change');
			setUser(loggedUser);
			console.log(loggedUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);
	const authInfo = {
		createUser,
		signIn,
		user,
		loading,
		userName,
		userPhoto,
		logOut,
		signInWithGoogle,
		setLoading,
		setUser
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};
export default AuthProvider;
