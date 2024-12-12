// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBBj5GkausRU9cBGWFNm2vR96WSuFSjMs",
  authDomain: "fir-1-db-155c4.firebaseapp.com",
  projectId: "fir-1-db-155c4",
  storageBucket: "fir-1-db-155c4.firebasestorage.app",
  messagingSenderId: "734383330415",
  appId: "1:734383330415:web:388eead8f0c01c69dca99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;