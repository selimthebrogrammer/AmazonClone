import firebase from "firebase";

const firebaseConfig = {
    apiKey: "YOUR_API",
    authDomain: "YOUR_AUTHDOMAIN",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASURE_ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

