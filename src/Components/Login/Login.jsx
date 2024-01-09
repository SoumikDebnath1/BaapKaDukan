// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Config/Config';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State for handling errors
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Sign in with email and password
            await auth.signInWithEmailAndPassword(email, password);

            // Redirect to the desired page after successful login
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.message);
            // Set the error state to display the error message
            setError(error.message);
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>

                {error && (
                    <p className="error-message">{error}</p>
                )}
            </form>
            <p className="signup-link">
                Don't have an account?<Link to="/loginsignup" style={{ textDecoration: 'none' }}>Sign Up here</Link>
            </p>
        </div>
    );
}

export default Login;
