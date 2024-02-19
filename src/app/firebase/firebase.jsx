"use client"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnYatkilEnQlRbpjNidMwbZZ9e0s-kc2Q",
  authDomain: "bookmart-f5d3b.firebaseapp.com",
  projectId: "bookmart-f5d3b",
  storageBucket: "bookmart-f5d3b.appspot.com",
  messagingSenderId: "200970634484",
  appId: "1:200970634484:web:b78a9d0d37baabf3b48aa1",
  measurementId: "G-2FCSL8K0N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const colRef = collection(db, "usersProfile");

getDocs(colRef)
  .then((snapshot) => {
    let usersProfile = [];
    snapshot.docs.map((user) => {
      usersProfile.push({ ...user.data(), id: user.id });
    });
    console.log(usersProfile);
  })
  .catch((err) => console.log(err.message));

export { app, auth,colRef };
