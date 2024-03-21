import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJTGzXpyifUkWWH_2rRkiB0w1n5FhQ1xs",
  authDomain: "backend54045.firebaseapp.com",
  projectId: "backend54045",
  storageBucket: "backend54045.appspot.com",
  messagingSenderId: "757114462783",
  appId: "1:757114462783:web:28481a2575f00da0e94e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)