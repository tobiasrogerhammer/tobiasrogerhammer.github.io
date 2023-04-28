import React, { useState } from 'react';
import styles from '../login.module.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedChats, setSelectedChats] = useState([]);
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleChatSelection = (event) => {
    const chatId = event.target.value;
    const isSelected = event.target.checked;
    if (isSelected) {
      setSelectedChats((prevSelectedChats) => [...prevSelectedChats, chatId]);
    } else {
      setSelectedChats((prevSelectedChats) =>
        prevSelectedChats.filter((chat) => chat !== chatId)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/create", {
        username: username,
        mailadress: email,
        password: password,
        selectedChats: selectedChats
      }, {withCredentials: true});
      console.log(response); // assume the server returns a JWT token
    } catch (error) {
      console.log('heipådeg')
    
    }
  };

  return (
    <div className={styles.login}>
      <h2>Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <div>
          <p>Join Chat Rooms:</p>
          <label>
            <input
              type="checkbox"
              value="chat1"
              onChange={handleChatSelection}
              checked={selectedChats.includes('chat1')}
            />
            Chat 1
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="chat2"
              onChange={handleChatSelection}
              checked={selectedChats.includes('chat2')}
            />
            Chat 2
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="chat3"
              onChange={handleChatSelection}
              checked={selectedChats.includes('chat3')}
            />
            Chat 3
            </label>
      <br />
    </div>

    <Link to="/chat"> <button type="submit">Sign up</button></Link>
  </form>
</div>
);
}

export default Login;