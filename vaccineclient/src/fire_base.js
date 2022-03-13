import firebase from 'firebase/app';
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAPPXFRcjX1HaSZ_pdLPfQYt992PvNgFo8",
    authDomain: "cegedim-1d756.firebaseapp.com",
    databaseURL: "https://cegedim-1d756-default-rtdb.firebaseio.com",
    projectId: "cegedim-1d756",
    storageBucket: "cegedim-1d756.appspot.com",
    messagingSenderId: "65613562669",
    appId: "1:65613562669:web:0ac78582c0237fbb7489a4",
    measurementId: "G-490J6MR99R"
  };
  
  
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = app.auth();
export default auth;
  