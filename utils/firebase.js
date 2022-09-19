import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq-yluqtgqeRvbR2BlGALiTTmuoay4oq4M",
  authDomain: "wedding-6f108.firebaseapp.com",
  projectId: "wedding-6f108",
  storageBucket: "wedding-6f108.appspot.com",
  messagingSenderId: "227478229447",
  appId: "1:227478229447:web:7b724ff726d001017ec9e2",
  measurementId: "G-RYLBEQ5WTM",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
