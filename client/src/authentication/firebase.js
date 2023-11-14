// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxmuldNkhhW27P0_fn1NnZe22cgluVqNU",
  authDomain: "beatagm-9afa0.firebaseapp.com",
  projectId: "beatagm-9afa0",
  storageBucket: "beatagm-9afa0.appspot.com",
  messagingSenderId: "710656164585",
  appId: "1:710656164585:web:796e9a148d89dec9cb2678",
  measurementId: "G-J9XR5D2KF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);