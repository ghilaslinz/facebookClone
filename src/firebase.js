import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 


  apiKey: "AIzaSyDuBmtSHUlq3ghccI0HaXmRjfdTcsw1LII",
  authDomain: "facebook-clone-c6cd0.firebaseapp.com",
  databaseURL: "https://facebook-clone-c6cd0.firebaseio.com",
  projectId: "facebook-clone-c6cd0",
  storageBucket: "facebook-clone-c6cd0.appspot.com",
  messagingSenderId: "66890816388",
  appId: "1:66890816388:web:38a483d381f4d5e65d9bd1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
