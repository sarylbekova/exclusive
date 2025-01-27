// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth}  from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4sbHISZr0QcUpEWm7hClTaIRLdKnrFxs",
  authDomain: "exclusive-register-c3710.firebaseapp.com",
  projectId: "exclusive-register-c3710",
  storageBucket: "exclusive-register-c3710.firebasestorage.app",
  messagingSenderId: "983850552931",
  appId: "1:983850552931:web:805cb10382727e7e4b7256",
  measurementId: "G-12G7Y2P6XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)