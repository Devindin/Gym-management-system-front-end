import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnSsuY25TlSR9GLpcWJSFNKS0G4olOT4I",
  authDomain: "minator-8dfcd.firebaseapp.com",
  databaseURL: "https://minator-8dfcd-default-rtdb.firebaseio.com",
  projectId: "minator-8dfcd",
  storageBucket: "minator-8dfcd.appspot.com",
  messagingSenderId: "768943297862",
  appId: "1:768943297862:web:36e7f615af02509aa8c147",
  measurementId: "G-E5MVLQF66W",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Realtime Database
const database = getDatabase(app);

// Initialize Firestore Database
const db = getFirestore(app);

export {app, auth, database, db};
