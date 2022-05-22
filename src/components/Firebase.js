// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7YXd2dl0QB5YPzqx-RX_MKvcix7jG2nw",
  authDomain: "nitolab-palomino.firebaseapp.com",
  projectId: "nitolab-palomino",
  storageBucket: "nitolab-palomino.appspot.com",
  messagingSenderId: "878552477905",
  appId: "1:878552477905:web:72b6439614f2c2122b15f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


