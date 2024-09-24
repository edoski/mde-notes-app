import {initializeApp} from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpWbtYo6jSXHoAq5KYo2EsPKgIQ66C5Xo",
    authDomain: "mde-notes-app-eeb72.firebaseapp.com",
    projectId: "mde-notes-app-eeb72",
    storageBucket: "mde-notes-app-eeb72.appspot.com",
    messagingSenderId: "553326662314",
    appId: "1:553326662314:web:304e97baf7fa8e465076d3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes')