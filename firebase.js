// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr9qts8EtMCcIlPaH_-y4rphuhHSzif7g",
  authDomain: "react-80ed6.firebaseapp.com",
  projectId: "react-80ed6",
  storageBucket: "react-80ed6.appspot.com",
  messagingSenderId: "913619915668",
  appId: "1:913619915668:web:980c6e3030b2400c577581",
  measurementId: "G-C841F76ZEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);