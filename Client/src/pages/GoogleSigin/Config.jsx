import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS-ySkBY3aDvPzE9O9c2WpxfUsBwYuOD4",
  authDomain: "harit-1a4d2.firebaseapp.com",
  projectId: "harit-1a4d2",
  storageBucket: "harit-1a4d2.appspot.com",
  messagingSenderId: "71292837482",
  appId: "1:71292837482:web:1d893ec883ced6c2b27413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};