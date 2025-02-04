// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0wluLbSM3u085jyKo_9yxG8pV35h5xUM",
  authDomain: "bookreaderapp-41b28.firebaseapp.com",
  projectId: "bookreaderapp-41b28",
  storageBucket: "bookreaderapp-41b28.firebasestorage.app",
  messagingSenderId: "331971781854",
  appId: "1:331971781854:web:c409361fbf8f1d99d7ce4f"
};

const addBook = async (title, file) => {
    try {
      await addDoc(collection(db, "books"), { title, file });
      console.log("Book added!");
    } catch (error) {
      console.error("Error adding book: ", error);
    }
  };
  
  export { addBook };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };