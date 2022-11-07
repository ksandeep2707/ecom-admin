// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdBJCi7Vje3tRLAMUISI37n_fHyKYr16I",
  authDomain: "ecomm-7f540.firebaseapp.com",
  projectId: "ecomm-7f540",
  storageBucket: "ecomm-7f540.appspot.com",
  messagingSenderId: "675295423551",
  appId: "1:675295423551:web:69443a0a633df8bc79dc8a",
  measurementId: "G-VYFEPB9QXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  default app;