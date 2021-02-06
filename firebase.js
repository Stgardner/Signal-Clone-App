import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCOznWz6hLPadwbuYbefPVhfq607_q08JU",
    authDomain: "signal-clone-aa99d.firebaseapp.com",
    projectId: "signal-clone-aa99d",
    storageBucket: "signal-clone-aa99d.appspot.com",
    messagingSenderId: "1033670331928",
    appId: "1:1033670331928:web:8b3362e584d739a362fd6d"
  };

  let app;

  if (firebase.apps.length=== 0 ) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth}