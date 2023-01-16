import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBj8AGgCxJAOYnGpLNt93Ob25wKNc2aeWg",
  authDomain: "notify-webapp-3f2fb.firebaseapp.com",
  projectId: "notify-webapp-3f2fb",
  storageBucket: "notify-webapp-3f2fb.appspot.com",
  messagingSenderId: "236890447490",
  appId: "1:236890447490:web:72f4924f4cb9380a531e9b",
  measurementId: "G-GVEDH10PCT"


  };
  
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const auth = getAuth(app);

export {provider, auth};
