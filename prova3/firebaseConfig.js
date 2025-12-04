// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD341IFUhHph2HY8Cu_AB7TBFf3tILCFE",
  authDomain: "aulanativeleticia.firebaseapp.com",
  projectId: "aulanativeleticia",
  storageBucket: "aulanativeleticia.firebasestorage.app",
  messagingSenderId: "721774764774",
  appId: "1:721774764774:web:7247ca358932032ec75127",
  measurementId: "G-33T0C1YKFB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);