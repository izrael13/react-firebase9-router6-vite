import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqwWrpENH4sZyJPP_53DDRUs6-8oze6Jo",
  authDomain: "udemy-react-2023-11725.firebaseapp.com",
  projectId: "udemy-react-2023-11725",
  storageBucket: "udemy-react-2023-11725.appspot.com",
  messagingSenderId: "726480233394",
  appId: "1:726480233394:web:aa5979bd4153278efdbaab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
