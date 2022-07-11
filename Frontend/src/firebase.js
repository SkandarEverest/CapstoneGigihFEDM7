// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvBycIR6Je8SLC4pERxCASDklUjROqT3c",
  authDomain: "gigihfedm7.firebaseapp.com",
  databaseURL: "https://gigihfedm7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gigihfedm7",
  storageBucket: "gigihfedm7.appspot.com",
  messagingSenderId: "264758857345",
  appId: "1:264758857345:web:5f28eefc112020179d8780",
  measurementId: "G-GDZ21EQ0KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);