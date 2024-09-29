import React, { useState } from 'react';
import API from '../api'; // Use the centralized API configuration

const Login = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    try {
      // Use the centralized API instance instead of axios.post
      const response = await API.post('/user/login', loginData);
      alert('Login successful!');
      console.log(response.data);
      // Handle successful login (store token, redirect, etc.)
      closeModal(); // Close the modal after successful login
    } catch (error) {
      console.error('Error during login', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="modal-content">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;