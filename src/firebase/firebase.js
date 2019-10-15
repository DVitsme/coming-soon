import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAD_a80L_zXoeNoBA-9cWxAKRScQaNQaPI',
  authDomain: 'valentine-consulting.firebaseapp.com',
  databaseURL: 'https://valentine-consulting.firebaseio.com',
  projectId: 'valentine-consulting',
  storageBucket: 'valentine-consulting.appspot.com',
  messagingSenderId: '690951985848',
  appId: '1:690951985848:web:44dec8c2d38f843ec7b24d'
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
