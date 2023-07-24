// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB7gmPRZI6yCR_Ux8vX1Zt1AjzapCp04ss",
  authDomain: "sample07-feea3.firebaseapp.com",
  projectId: "sample07-feea3",
  storageBucket: "sample07-feea3.appspot.com",
  messagingSenderId: "198929100013",
  appId: "1:198929100013:web:f7ade66bf36a62eec5b0e4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth }