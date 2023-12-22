import firebase from "firebase";

const firebase =firebase.initializeApp(
    {
        apiKey: "AIzaSyDF4HakejGtpQSL8PIsZFezFn_rXjXFO3I",
        authDomain: "clone-136be.firebaseapp.com",
        projectId: "clone-136be",
        storageBucket: "clone-136be.appspot.com",
        messagingSenderId: "418183195418",
        appId: "1:418183195418:web:d9162b7eec44a14470daa3",
        measurementId: "G-M0YDZ5XVLF"
    }
 );


 const auth=firebase.auth();

 export {auth};