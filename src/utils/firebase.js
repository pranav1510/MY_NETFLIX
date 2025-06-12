// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCXpFtglh5myrRFVz1M7lrG1rkLElPsiMk",
	authDomain: "mynetflix-9258c.firebaseapp.com",
	projectId: "mynetflix-9258c",
	storageBucket: "mynetflix-9258c.firebasestorage.app",
	messagingSenderId: "917818321041",
	appId: "1:917818321041:web:244a1b18717b3d068e3730",
	measurementId: "G-FV6L8PNQ10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
