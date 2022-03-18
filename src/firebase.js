// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
// import * as storage from "firebase/storage";

// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqY4aofl2UvvwufaMJL_pQcZuns7X_wT8",
  authDomain: "disneyplus-clone-49be5.firebaseapp.com",
  projectId: "disneyplus-clone-49be5",
  storageBucket: "disneyplus-clone-49be5.appspot.com",
  messagingSenderId: "74483027998",
  appId: "1:74483027998:web:76632482a07a84f91cde0f",
  measurementId: "G-P0540VF7WR",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
