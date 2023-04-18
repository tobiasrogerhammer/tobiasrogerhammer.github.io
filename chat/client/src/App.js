import React, { useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function getContent(){
  console.log('run')
  const content = async () => {
    const res = await axios.get("http://localhost:5000", {withCredentials: true})
    console.log(res)
  }
  content();
}

function ChatApp() {
  const [inputValue, setInputValue] = useState('');
  const [chats, setChats] = useState({
    chat1: {
      member1: [],
      member2: [],
      member3: [],
    },
    chat2: {
      member1: [],
      member2: [],
      member3: [],
    },
    chat3: {
      member1: [],
      member2: [],
      member3: [],
    },
  });
  const [currentChat, setCurrentChat] = useState('chat1');
  const [members] = useState(['member1', 'member2', 'member3']);
  const [availableChats] = useState(['chat1', 'chat2', 'chat3']);

  const handleInput = useCallback(event => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    setChats(prevChats => {
      const chatId = currentChat;
      const memberId = 'member1'; // TODO: Change to the ID of the currently logged-in user
      const newMessage = inputValue;
      const updatedChat = {
        ...prevChats[chatId],
        [memberId]: [...prevChats[chatId][memberId], newMessage],
      };
      return {
        ...prevChats,
        [chatId]: updatedChat,
      };
    });
    setInputValue('');
  }, [currentChat, inputValue]);

  const handleChatChange = useCallback(event => {
    setCurrentChat(event.target.value);
  }, []);

  const currentChatMembers = chats[currentChat] || {};

  return (
    <div className="chat-app">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div className="sidebar">
        <div className="chats">
          <div className="chat-header">Chats</div>
          <ul>
            {availableChats.map(chat => (
              <li key={chat}>
                <button
                  className={currentChat === chat ? 'active' : ''}
                  value={chat}
                  onClick={handleChatChange}
                >
                  {chat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="members">
          <div className="chat-header">Members</div>
          <ul>
            {members.map(member => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="chat-main">
        <div className="chat-header">{currentChat}</div>
        <div className="chat-body">
          {currentChatMembers[members[0]]?.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-footer">
          <form className="input-container" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInput}
              maxLength="500"
            />
            <button type="submit" onClick={getContent}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <div className="message-container">
      <div className="message sent">{message}</div>
    </div>
  );
}

export default ChatApp;