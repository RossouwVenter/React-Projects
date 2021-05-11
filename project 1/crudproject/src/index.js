import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBwHKWvUvquqKjS94J1fqC6KRvrx-WWOak",
  authDomain: "crudproject-6c636.firebaseapp.com",
  databaseURL: "https://crudproject-6c636-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crudproject-6c636",
  storageBucket: "crudproject-6c636.appspot.com",
  messagingSenderId: "137461447737",
  appId: "1:137461447737:web:8338ccd53c25e4749be1e8",
  measurementId: "G-VNK13QRMYR"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();