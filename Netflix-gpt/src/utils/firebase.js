// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTVU94ZsQ3pboHfKuj3lilg3WR5JjqnQs",
  authDomain: "netflixgpt-badcf.firebaseapp.com",
  projectId: "netflixgpt-badcf",
  storageBucket: "netflixgpt-badcf.appspot.com",
  messagingSenderId: "189468512538",
  appId: "1:189468512538:web:d335b2c8691def91a11ca3",
  measurementId: "G-5H3FTZ2RED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();