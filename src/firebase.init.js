// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebasea/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_CZ3F7LSClaX9J0vaGtnTUYQ_Z8xm8vE",
  authDomain: "ema-jhon-simple-2e2a4.firebaseapp.com",
  projectId: "ema-jhon-simple-2e2a4",
  storageBucket: "ema-jhon-simple-2e2a4.appspot.com",
  messagingSenderId: "690732771515",
  appId: "1:690732771515:web:2edffbb91c4a8d6036219e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;