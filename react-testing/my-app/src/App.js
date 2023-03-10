import React, { useState, useCallback } from 'react';
import './App.css';

function ChatApp() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState('chat1');
  const [members, setMembers] = useState(['member1', 'member2', 'member3']);
  const [chats, setChats] = useState(['chat1', 'chat2', 'chat3']);

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    setMessages(prevMessages => prevMessages.concat([inputValue]));
    setInputValue('');
  }, [inputValue]);

  const handleChatChange = useCallback(event => {
    setCurrentChat(event.target.value);
  }, []);

  return (
    <div className="chat-app">
      <div className="sidebar">
        <div className="chats">
          <div className="chat-header">
            Chats
          </div>
          <ul>
            {chats.map(chat => (
              <li key={chat}>
                <button className={currentChat === chat ? 'active' : ''} value={chat} onClick={handleChatChange}>{chat}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="members">
          <div className="chat-header">
            Members
          </div>
          <ul>
            {members.map(member => (
              <li key={member}>
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="chat-main">
        <div className="chat-header">
          {currentChat}
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
