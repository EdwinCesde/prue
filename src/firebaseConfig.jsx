// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbiHnlSJUNLzOAMxg_lsNz3bork8Nr7jw",
    authDomain: "userragnarok-5b594.firebaseapp.com",
    projectId: "userragnarok-5b594",
    storageBucket: "userragnarok-5b594.firebasestorage.app",
    messagingSenderId: "160941238855",
    appId: "1:160941238855:web:9ff2571d694ce6bccedf62"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
