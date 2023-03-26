
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDNbsoRe7vrn8n4A30YM-OBroOE9fJZ4Ao",
  authDomain: "curd-46582.firebaseapp.com",
  projectId: "curd-46582",
  storageBucket: "curd-46582.appspot.com",
  messagingSenderId: "216953795642",
  appId: "1:216953795642:web:35e552c35eae7be9ceb103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);