// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHvmOQ-yG-KxDXMuU5nTF9S0qMD7kXQzU",
  authDomain: "inventory-management-da83f.firebaseapp.com",
  projectId: "inventory-management-da83f",
  storageBucket: "inventory-management-da83f.appspot.com",
  messagingSenderId: "910215168288",
  appId: "1:910215168288:web:3a360535c1020782051745",
  measurementId: "G-G6V9CZB0G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };