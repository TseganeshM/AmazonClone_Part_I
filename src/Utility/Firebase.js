// Import the functions you need from the SDKs you need

//import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBNt1lXKlsPJMvw94xiLeyuerYipAMcdQ",
  authDomain: "clone-cc902.firebaseapp.com",
  projectId: "clone-cc902",
  storageBucket: "clone-cc902.appspot.com",
  messagingSenderId: "279864111114",
  appId: "1:279864111114:web:4011ce9e43cb5a5bbeaff3",
};

// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig);
//export const auth = getAuth(app);
//export const db = app.firestore();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//get firebase serie
export const auth = getAuth(app);
export const db = getFirestore(app);
