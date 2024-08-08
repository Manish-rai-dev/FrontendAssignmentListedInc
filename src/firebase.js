
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDG-Z-KG1ItiJN7Yf82OOpIMPcEC7LfmQ",
  authDomain: "openinappproject-409417.firebaseapp.com",
  projectId: "openinappproject-409417",
  storageBucket: "openinappproject-409417.appspot.com",
  messagingSenderId: "375206353215",
  appId: "1:375206353215:web:717320296440fb265d9b8a",
  measurementId: "G-WRY74P92JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};