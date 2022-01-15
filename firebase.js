import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAArrwvKB0FPSuSvNQqFZGf8zRWTqLNriA",
    authDomain: "socialmedia-6e36a.firebaseapp.com",
    projectId: "socialmedia-6e36a",
    storageBucket: "socialmedia-6e36a.appspot.com",
    messagingSenderId: "782157695087",
    appId: "1:782157695087:web:2fb07a6a4fa4f7c508659a",
    measurementId: "G-TSSSY27Z88"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }