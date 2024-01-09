import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBDXebaYR7PH1Tg3No8bbWOUGfYLoY0Wxk",
    authDomain: "basanti-variety-store.firebaseapp.com",
    projectId: "basanti-variety-store",
    storageBucket: "basanti-variety-store.appspot.com",
    messagingSenderId: "96709413370",
    appId: "1:96709413370:web:ae3dccd649bbdc8067fc43"
};
// Check if Firebase is not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };

const Config = () => {
    return (
        <div>

        </div>
    );
}

export default Config;
