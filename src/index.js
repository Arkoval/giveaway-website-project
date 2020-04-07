import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss'
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDua-r5fndbyZ-S4w-LwxKRbULnZe9gET4",
    authDomain: "oddam-portfoliolab.firebaseapp.com",
    databaseURL: "https://oddam-portfoliolab.firebaseio.com",
    projectId: "oddam-portfoliolab",
    storageBucket: "oddam-portfoliolab.appspot.com",
    messagingSenderId: "435272165502",
    appId: "1:435272165502:web:f2f9a39f8ea932b0e3d02f",
    measurementId: "G-K5M2YENQSJ"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App/>,document.getElementById('root'));
