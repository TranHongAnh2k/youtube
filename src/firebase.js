import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBzTPpvJaAbuJ46Z8nzgCu-cCkOYqVZwqk",
  authDomain: "fir-6bc2d.firebaseapp.com",
  projectId: "fir-6bc2d",
  storageBucket: "fir-6bc2d.appspot.com",
  messagingSenderId: "213579655199",
  appId: "1:213579655199:web:87d72f81536d28805e0d2a",
  measurementId: "G-5JECRCSXSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth()
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()

export default auth