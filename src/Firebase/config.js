import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
export default app;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABg90oFS4j-jnOV6LX1E8LjdsCTmmj1fc",
//   authDomain: "winter-donation-e73b7.firebaseapp.com",
//   projectId: "winter-donation-e73b7",
//   storageBucket: "winter-donation-e73b7.firebasestorage.app",
//   messagingSenderId: "338927719906",
//   appId: "1:338927719906:web:e9cb5f6ade3839891f95bb"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
