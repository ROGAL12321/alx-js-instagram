import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { ref, getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCxeRgaTLO12uVu3uEXa0dqsSe9JgrQYpw",
  authDomain: "alx-instagram.firebaseapp.com",
  projectId: "alx-instagram",
  storageBucket: "alx-instagram.appspot.com",
  messagingSenderId: "851241559479",
  appId: "1:851241559479:web:61e838bed0f67447ed7432",
  databaseURL: "https://alx-instagram-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage()

export const auth = getAuth(app);

export const storageRef = ref(storage, 'images');
export const database = getDatabase(app);