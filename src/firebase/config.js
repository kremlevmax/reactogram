// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrMAUH0o1FPHjYLuDI_2Drb_mp87LfFzU",
  authDomain: "reactogram-32279.firebaseapp.com",
  projectId: "reactogram-32279",
  storageBucket: "reactogram-32279.appspot.com",
  messagingSenderId: "940926391361",
  appId: "1:940926391361:web:6a159c89d3bebacb35a2c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectFirestore, projectStorage };
