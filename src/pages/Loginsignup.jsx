import React, { useState } from 'react';
import './CSS/Loginsignup.css';
import { Link, useNavigate } from 'react-router-dom'; // Update the import
import { auth, fs } from '../Config/Config';

const Loginsignup = () => {
    const [fulName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
    
        try {
            const credentials = await auth.createUserWithEmailAndPassword(email, password);
            const userId = credentials.user.uid;
    
            await fs.collection('users').doc(userId).set({
                FullName: fulName,
                Email: email,
            });
    
            setSuccessMsg('Account created successfully!');
            
            // Clear the form fields
            setFullname('');
            setEmail('');
            setPassword('');
    
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/login');
            }, 3000);
        } catch (error) {
            setErrorMsg(error.message);
        }
    };
    

    return (
        <div className='Loginsignup'>
            {successMsg && <p className="success-message">{successMsg}</p>}
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-field">
                    <input type="text" placeholder='Your Name' onChange={(e) => setFullname(e.target.value)} value={fulName} />
                    <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button onClick={handleSignup}>Continue</button>
                <p className="loginsignup-login">Already have an account?<Link to='/login' style={{ textDecoration: 'none' }}><span>Login</span></Link> </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy </p>
                </div>
                {errorMsg && <p className="error-message">{errorMsg}</p>}
            </div>
        </div>
    );
}

export default Loginsignup;
