import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, FaEnvelope  } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginRegister = () => {

    const [isRegister, setIsRegister] = useState(false)
    const[action, setAction] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost: 5000/api/auth/login", { email, password});
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        }catch(err){
            console.error("Login Failed",err);
            alert("Login failed.Please check your credentials.");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
            alert("Registration successful! You can now log in.");
            setIsRegister(false); // Switch to login form after successful registration
        } catch (err) {
            console.error("Registration Failed", err);
            alert("Registration failed. Please try again.");

        }
    };

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };
    
    return (
        <div className={`wrapper ${isRegister ? 'active' : ''}`}>
            <div className="form-box login" style={{display: isRegister ? 'none' : 'block'}}>
                <form onSubmit={handleLogin} >
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='username or Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className="register-link">
                        <p>Don't have an account?
                            <a href="#" onClick={() => setIsRegister(true)}>Register</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className="form-box register" style={{ display: isRegister ? 'block' : 'none' }}>
                <form onSubmit={handleRegister}>
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required  value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <FaEnvelope  className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            I agree to the terms & conditions
                        </label>
                    </div>

                    <button type='submit'>Register</button>

                    <div className="register-link">
                        <p>Already have an account?
                            <a href="#" onClick={() => setIsRegister(false)}>Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister