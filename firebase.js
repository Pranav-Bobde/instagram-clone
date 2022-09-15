// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFireStore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG2ZagzoC2hqL2fdoaaa-LW2W36-IQaMQ",
  authDomain: "insta-clone-a5b87.firebaseapp.com",
  projectId: "insta-clone-a5b87",
  storageBucket: "insta-clone-a5b87.appspot.com",
  messagingSenderId: "852251059996",
  appId: "1:852251059996:web:6a861d0c35fef3447fbcd9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };