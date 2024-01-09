
import React, { useState } from 'react';
import './Admin.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'; // Import the firebaseConfig file

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Login successful, you can redirect or perform admin actions here
                const user = userCredential.user;
                console.log('Logged in user:', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login error:', errorCode, errorMessage);
            });
    };

    return (
        <div className="admin-panel">
            <h2>Welcome to the Admin Panel</h2>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Admin;
