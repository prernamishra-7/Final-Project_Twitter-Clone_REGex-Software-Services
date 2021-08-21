// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBNbIhWQFCXLTpfbRwDXSn0SSNvqZSiLBc",
    authDomain: "twitter-clone-ee568.firebaseapp.com",
    projectId: "twitter-clone-ee568",
    storageBucket: "twitter-clone-ee568.appspot.com",
    messagingSenderId: "554665034119",
    appId: "1:554665034119:web:84b0e41bcb4b40e06ed322",
    measurementId: "G-58RTSWCWRN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export default db;