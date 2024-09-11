// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPjThpTLjsDy7Sah1_lBsR8XIwyYu6TuM",
  authDomain: "ecom-10c92.firebaseapp.com",
  projectId: "ecom-10c92",
  storageBucket: "ecom-10c92.appspot.com",
  messagingSenderId: "991810914328",
  appId: "1:991810914328:web:8367d46c3c217bb30c5b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
