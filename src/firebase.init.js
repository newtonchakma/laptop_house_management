// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeP-PVfyf5xWO_t52qONCHPoHQfp5ffHg",
  authDomain: "warehouse-management-f64ea.firebaseapp.com",
  projectId: "warehouse-management-f64ea",
  storageBucket: "warehouse-management-f64ea.appspot.com",
  messagingSenderId: "827532821719",
  appId: "1:827532821719:web:476700f43483a79e685c92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;