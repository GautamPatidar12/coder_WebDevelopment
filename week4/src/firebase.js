import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
  authDomain: "fir-auth-1132.firebaseapp.com",
  projectId: "fir-auth-1132",
  storageBucket: "fir-auth-1132.appspot.com",
  messagingSenderId: "1029021654707",
  appId: "1:1029021654707:web:14aa4dee98449061701ac6",
  measurementId: "G-MFP6M081T7",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };