import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCGUyP02hYRyy1HUlnKyxdixr62JbnD6uU",
  authDomain: "facebook-clone-58d55.firebaseapp.com",
  databaseURL: "https://facebook-clone-58d55.firebaseio.com",
  projectId: "facebook-clone-58d55",
  storageBucket: "facebook-clone-58d55.appspot.com",
  messagingSenderId: "426362781193",
  appId: "1:426362781193:web:7deae2ec113000ef4c42d8",
  measurementId: "G-3DHD1E3632",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
