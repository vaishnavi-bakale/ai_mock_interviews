// Import the functions you need from the SDKs you need
//import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2jJF2xXMekga1BSjKB2CNID7ALyDR5u8",
  authDomain: "prepwise-e7a15.firebaseapp.com",
  projectId: "prepwise-e7a15",
  storageBucket: "prepwise-e7a15.appspot.com",
  messagingSenderId: "623730268541",
  appId: "1:623730268541:web:d0c97ddbcf30027ca81414",
  measurementId: "G-HBR8XNGJMC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
//export const db = getFirestore(app);
export default app;