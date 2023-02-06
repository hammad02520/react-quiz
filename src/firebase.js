import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnSxS0Cv401J9rLzbI-4mcjncIF65mUi8",
  authDomain: "quiz2-6a135.firebaseapp.com",
  projectId: "quiz2-6a135",
  storageBucket: "quiz2-6a135.appspot.com",
  messagingSenderId: "765462281406",
  appId: "1:765462281406:web:fe5d96cb546105fe3172ef"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app , auth}
