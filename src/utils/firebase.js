// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA3scSsUH7W_ElQWwj_nomlto_UZXWAjvY",
	authDomain: "mynetflix-64659.firebaseapp.com",
	projectId: "mynetflix-64659",
	storageBucket: "mynetflix-64659.firebasestorage.app",
	messagingSenderId: "430500939563",
	appId: "1:430500939563:web:d0299ef874be58045e276e",
	measurementId: "G-W32WRMR0PT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
