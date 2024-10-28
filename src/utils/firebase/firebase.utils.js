import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApyh0-BXtZ4bfwkwpQpli07NYY_lfOR-M",
  authDomain: "daddy-clothing.firebaseapp.com",
  projectId: "daddy-clothing",
  storageBucket: "daddy-clothing.appspot.com",
  messagingSenderId: "163177733219",
  appId: "1:163177733219:web:a698ba6c7ffaba6b4e6c56"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
