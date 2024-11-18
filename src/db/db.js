import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5jd3nQxEo60tQ_LvKA6DMRczkkGbX4ok",
  authDomain: "alerogcoder-60060.firebaseapp.com",
  projectId: "alerogcoder-60060",
  storageBucket: "alerogcoder-60060.firebasestorage.app",
  messagingSenderId: "778320971523",
  appId: "1:778320971523:web:f02c34783471e206018b36"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db