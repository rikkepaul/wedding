import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDq-yluqtgqRvbR2BlGALiTTmuoay4oq4M',
    authDomain: 'wedding-6f108.firebaseapp.com',
    projectId: 'wedding-6f108',
    storageBucket: 'wedding-6f108.appspot.com',
    messagingSenderId: '227478229447',
    appId: '1:227478229447:web:7b724ff726d001017ec9e2',
    measurementId: 'G-RYLBEQ5WTM'
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
