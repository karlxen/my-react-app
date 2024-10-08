import React, { useState } from 'react';
import Navbar from './Navbar';
import './rstyle.css'; // Make sure this imports your CSS file

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [output, setOutput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setOutput(`
            <h3>REGISTRATION DETAILS</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Password:</strong> ${password}</p>
        `);
    };

    return (
        <>
            <Navbar />
            <div className="regbody"> {/* Use the regbody class here */}
                <div className="form-container">
                    <h1>Register Page</h1>
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
                        <button type="submit">Register</button>
                    </form>
                    <a href="/login">Already have an account? Login here</a>
                    {output && (
                        <div className="output" dangerouslySetInnerHTML={{ __html: output }} />
                    )}
                </div>
            </div>
        </>
    );
};

export default Register;
