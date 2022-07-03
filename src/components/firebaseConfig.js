// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmVn0yPMjOWEDvZHxxTtGgVefBlE8htEQ",
  authDomain: "dlh-shop-9851e.firebaseapp.com",
  projectId: "dlh-shop-9851e",
  storageBucket: "dlh-shop-9851e.appspot.com",
  messagingSenderId: "700273989692",
  appId: "1:700273989692:web:3ec5cc14fcae5e283c0b39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;