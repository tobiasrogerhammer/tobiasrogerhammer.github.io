import React from 'react';
import { auth, firestore } from './firebase';



function App() {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');

  // Fetch messages from Firestore on mount
  React.useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const newMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(newMessages);
      });
    return unsubscribe;
  }, []);

  // Add a new message to Firestore
  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.firestore().collection('messages').add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setNewMessage('');
  };

  return (
    <div>
      <h1>React Chat App</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
