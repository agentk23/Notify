import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAPLWjzRle22RujgqPU2wJkxHE32vuG-Xo",
    authDomain: "notify-371905.firebaseapp.com",
    projectId: "notify-371905",
    storageBucket: "notify-371905.appspot.com",
    messagingSenderId: "804264511259",
    appId: "1:804264511259:web:4af40dfcb8e2a2a14a35be",
    measurementId: "G-SPMYS4YM1G"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
