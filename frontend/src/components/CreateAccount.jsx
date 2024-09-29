// ./components/CreateAccount.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [stateOfResidence, setStateOfResidence] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
      email,
      age,
      stateOfResidence,
    };

    try {
      const response = await axios.post('http://localhost:8082/user/createUser', userData);
      alert('Account successfully created!');
      console.log(response.data);
      closeModal(); // Close the modal after successful account creation
    } catch (error) {
      console.error('Error creating account', error);
      alert('Error creating account. Please try again.');
    }
  };

  return (
    <div className="modal-content">
      <h2>Create Your Account</h2>
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
        <div>
          <input 
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="number"
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="text"
            placeholder='State of Residence'
            value={stateOfResidence}
            onChange={(e) => setStateOfResidence(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Create Account</button>
        <button type="button" onClick={closeModal}>Cancel</button> {/* Close the modal without action */}
      </form>
    </div>
  );
};

export default CreateAccount;
