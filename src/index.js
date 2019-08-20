import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    
        apiKey: "AIzaSyDS9xksZkwX3cJrvKM3kp_JEccOX-RBOPQ",
        authDomain: "evernote-clone-5ab97.firebaseapp.com",
        databaseURL: "https://evernote-clone-5ab97.firebaseio.com",
        projectId: "evernote-clone-5ab97",
        storageBucket: "",
        messagingSenderId: "78446287674",
        appId: "1:78446287674:web:87135c3f1e862cbc"



});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
