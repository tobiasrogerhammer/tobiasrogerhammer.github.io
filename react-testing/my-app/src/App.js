import React, { useState, useCallback } from 'react';
import './App.css';

function ChatApp() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    setMessages(prevMessages => prevMessages.concat([inputValue]));
    setInputValue('');
  }, [inputValue]);

  return (
    <div className="chat-app">
      <div className="chat-header">
        Chat App
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-footer">
        <form className="input-container" onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInput} maxLength="500"/>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <div className="message-container">
      <div className="message sent">
        {message}
      </div>
    </div>
  );
}

export default ChatApp;
