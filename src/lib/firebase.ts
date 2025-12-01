import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AlZaSyBchWd2W5dxRzSHDQDB6NN67ds4wS1xCY",
  authDomain: "inspectionsys-a76d4.firebaseapp.com",
  projectId: "inspectionsys-a76d4",
  storageBucket: "inspectionsys-a76d4.firebasestorage.app",
  messagingSenderId: "823282027878",
  appId: "1:823282027878:web:aa55ef272f33281d8f88ca7",
  measurementId: "G-90GSCJHKBD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
