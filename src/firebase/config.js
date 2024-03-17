// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VWVIVcFucsRf1JfOyjLYoLCjvT_eiGA",
  authDomain: "project-2e16b.firebaseapp.com",
  projectId: "project-2e16b",
  storageBucket: "project-2e16b.appspot.com",
  messagingSenderId: "39828847144",
  appId: "1:39828847144:web:846752ac19a815e546d31d"
};


// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
