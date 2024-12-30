import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyATKMAYVCRLjOeX0Npj-VcWdEuKQhy0nRg",
  authDomain: "final-assignment-4f1de.firebaseapp.com",
  databaseURL: "https://final-assignment-4f1de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-assignment-4f1de",
  storageBucket: "final-assignment-4f1de.firebasestorage.app",
  messagingSenderId: "928317934661",
  appId: "1:928317934661:web:d2dd3a37c8bade1194272c",
  measurementId: "G-LTTR4ZE1ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
