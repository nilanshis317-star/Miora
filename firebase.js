
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkvjTJGXi8xc1UDA__-GvndOhi_LVIYpU",
  authDomain: "miora-bb104.firebaseapp.com",
  projectId: "miora-bb104",
  storageBucket: "miora-bb104.firebasestorage.app",
  messagingSenderId: "140839504875",
  appId: "1:140839504875:web:457a10392af9687eb5a7ae"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

console.log("Miora Firebase initialized successfully!");
console.log("Firebase project:", app.options.projectId);

export {
  app,
  auth,
  db,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
};
