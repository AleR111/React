import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCQaDX1h-ywEdxafjOazncHTzDH7yE-svE",
    authDomain: "my-react-app-5e9e3.firebaseapp.com",
    databaseURL: "https://my-react-app-5e9e3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-react-app-5e9e3",
    storageBucket: "my-react-app-5e9e3.appspot.com",
    messagingSenderId: "864721367357",
    appId: "1:864721367357:web:a82bb1e9d8af5b88ff9554",
    measurementId: "G-5E7XQGR4SB"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const database = firebase.database();
