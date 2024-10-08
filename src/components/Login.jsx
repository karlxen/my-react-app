import React, { useState } from 'react';
import Navbar from './Navbar';
import './lstyle.css'; // Ensure you import your CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [output, setOutput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setOutput(`LOGIN DETAILS\nUsername: ${username}\nPassword: ${password}`);
    };

    return (
        <>
            <Navbar />
            <div className="loginbody">
            <div className="form-container">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="section personal-info">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <a href="#">Forgot your password?</a>
                <a href="/register">Don't have an account? Sign up</a>
                {output && (
                    <div className="output">
                        <h3>LOGIN DETAILS</h3>
                        <p><strong>Username:</strong> {username}</p>
                        <p><strong>Password:</strong> {password}</p>
                    </div>
                )}
            </div>
            </div>
        </>
    );
};

export default Login;
