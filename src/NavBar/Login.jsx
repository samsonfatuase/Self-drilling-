import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

export default function login() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); 

    const handleLogin = () => {
        navigate('/dashboard/account')
    };

    return (
        <div className="register-container">
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Submit</button>
        </div>
    );
}
