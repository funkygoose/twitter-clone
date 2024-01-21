// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKx-OZ8QSOGlBs_khZhImW-m6LUGE5vm0",
  authDomain: "twitter-clone-f1ab0.firebaseapp.com",
  projectId: "twitter-clone-f1ab0",
  storageBucket: "twitter-clone-f1ab0.appspot.com",
  messagingSenderId: "481543111673",
  appId: "1:481543111673:web:6e8bd0b7fae49010877328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
