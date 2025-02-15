
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:             process.env.NEXT_PUBLIC_REACT_APP_apiKey,
  authDomain:         process.env.NEXT_PUBLIC_REACT_APP_authDomain,
  projectId:          process.env.NEXT_PUBLIC_REACT_APP_projectId,
  storageBucket:      process.env.NEXT_PUBLIC_REACT_APP_storageBucket,
  messagingSenderId:  process.env.NEXT_PUBLIC_REACT_APP_messagingSenderId,
  appId:              process.env.NEXT_PUBLIC_REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;