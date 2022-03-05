import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAAlsBhNlPo2AA2K8FwavrW2D4Bb-NT6D4",
    authDomain: "react-app-cursos-c3e51.firebaseapp.com",
    projectId: "react-app-cursos-c3e51",
    storageBucket: "react-app-cursos-c3e51.appspot.com",
    messagingSenderId: "215387491628",
    appId: "1:215387491628:web:abbe3d484c497c595b3089"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}