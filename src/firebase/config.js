// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, getStore } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBN1NIf5xCztHjbJXRswSN3O1g7dxW0a5c",
  authDomain: "lemon-6ab79.firebaseapp.com",
  projectId: "lemon-6ab79",
  storageBucket: "lemon-6ab79.appspot.com",
  messagingSenderId: "473161896957",
  appId: "1:473161896957:web:3df7bdcf6757aa120fff94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
