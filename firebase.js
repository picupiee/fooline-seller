import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2X9ZO8FSxQwgd3xsV__iZNUtSPYoDlik",
  authDomain: "fooline-c4251.firebaseapp.com",
  projectId: "fooline-c4251",
  storageBucket: "fooline-c4251.firebasestorage.app",
  messagingSenderId: "870401293012",
  appId: "1:870401293012:web:b04e8e7bf28935d41e5941",
  measurementId: "G-BVSMZN94L2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
