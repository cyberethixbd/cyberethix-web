// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAztZxDz65kHy_PVPibR2hS3DdK3in_358",
  authDomain: "cyber-ethix-bd.firebaseapp.com",
  projectId: "cyber-ethix-bd",
  storageBucket: "cyber-ethix-bd.firebasestorage.app",
  messagingSenderId: "498532835915",
  appId: "1:498532835915:web:ca1e19458626fdd5c5a3ce",
  measurementId: "G-S4RR4TH57G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
