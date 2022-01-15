import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_CFBgMVE-MUUD_sAd-8d7gX2o7Z3i46g",
    authDomain: "socialmedia-aa8ac.firebaseapp.com",
    projectId: "socialmedia-aa8ac",
    storageBucket: "socialmedia-aa8ac.appspot.com",
    messagingSenderId: "909154818579",
    appId: "1:909154818579:web:9261b32f9fe8456f6cfde6",
    measurementId: "G-98SYFDHPGS"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);
export { app, db, storage }