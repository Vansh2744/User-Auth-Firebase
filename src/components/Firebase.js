import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAIN64poKztRlKMeNEhFwskbEcs4IcHBA8",
  authDomain: "authentication-c30ab.firebaseapp.com",
  projectId: "authentication-c30ab",
  storageBucket: "authentication-c30ab.appspot.com",
  messagingSenderId: "37694790389",
  appId: "1:37694790389:web:8f40ca65212b3d9a3443bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
