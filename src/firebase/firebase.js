import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXJg4tlmUfKv5GQLrnGmvfx7hB4YiwS5Q",
  authDomain: "insta-clone-37ad8.firebaseapp.com",
  projectId: "insta-clone-37ad8",
  storageBucket: "insta-clone-37ad8.appspot.com",
  messagingSenderId: "402171763985",
  appId: "1:402171763985:web:347fec9d8f15c375f280b0",
  measurementId: "G-CSV7191YXV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFireStore(app);
const storage = getStorage(app);

export {auth,app,firestore,storage};