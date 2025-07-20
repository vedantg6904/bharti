// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9t7ZYojw0gjSRyuyjxKcJkkIWlHftkSI",
  authDomain: "inventory-management-1172b.firebaseapp.com",
  projectId: "inventory-management-1172b",
  storageBucket: "inventory-management-1172b.firebasestorage.app",
  messagingSenderId: "239542038017",
  appId: "1:239542038017:web:5b1014b0e6d26b93589a00",
  measurementId: "G-EFH4QP7TCS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
