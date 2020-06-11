import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAUxAkVG9Lozdx-RVhiEgTslELvOB_dsYE",
  authDomain: "react-shop-a04e2.firebaseapp.com",
  databaseURL: "https://react-shop-a04e2.firebaseio.com",
  projectId: "react-shop-a04e2",
  storageBucket: "react-shop-a04e2.appspot.com",
  messagingSenderId: "617232605527",
  appId: "1:617232605527:web:dd3f804b3c3b1470449e12",
  measurementId: "G-CM22BC98FK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;