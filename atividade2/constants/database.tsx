import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxH5PBYkaSovFc6LwYA1qRlfKZoXrsYFk",
  authDomain: "tasklist-un.firebaseapp.com",
  databaseURL: "https://tasklist-un-default-rtdb.firebaseio.com",
  projectId: "tasklist-un",
  storageBucket: "tasklist-un.appspot.com",
  messagingSenderId: "1093057204533",
  appId: "1:1093057204533:web:1909e903c3934e27647c7c",
  measurementId: "G-7SCM85PB2X"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
