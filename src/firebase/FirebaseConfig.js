
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXTmFHfzHoBhdfmhCD9jQ36yNtN-h85oE",
  authDomain: "wiki-97283.firebaseapp.com",
  projectId: "wiki-97283",
  storageBucket: "wiki-97283.firebasestorage.app",
  messagingSenderId: "994038116228",
  appId: "1:994038116228:web:c7257cfa6faa96f11eb7d1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleauthprovider = new GoogleAuthProvider()