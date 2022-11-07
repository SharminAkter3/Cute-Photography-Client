// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdyssMoKBy5820YizGkPTVaoAWrTIKT9E",
    authDomain: "cute-photography.firebaseapp.com",
    projectId: "cute-photography",
    storageBucket: "cute-photography.appspot.com",
    messagingSenderId: "399203370663",
    appId: "1:399203370663:web:42161c0626efd62b1efd82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;