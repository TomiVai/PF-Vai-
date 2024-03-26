import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD_q6ORfIf1MEhIAjiEovSmOFONdEX777Q",
    authDomain: "mi-tienda-4864a.firebaseapp.com",
    projectId: "mi-tienda-4864a",
    storageBucket: "mi-tienda-4864a.appspot.com",
    messagingSenderId: "269413971014",
    appId: "1:269413971014:web:abc97e638fdf4271e4c647",
    measurementId: "G-THW0FXS1K5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
