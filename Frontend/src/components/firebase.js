import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBvBycIR6Je8SLC4pERxCASDklUjROqT3c",
  authDomain: "gigihfedm7.firebaseapp.com",
  databaseURL: "https://gigihfedm7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gigihfedm7",
  storageBucket: "gigihfedm7.appspot.com",
  messagingSenderId: "264758857345",
  appId: "1:264758857345:web:5f28eefc112020179d8780",
  measurementId: "G-GDZ21EQ0KX",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
