const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const db = "mongodb+srv://tobias:3EZkUJgct3QLHau@cluster0.v5e8lmx.mongodb.net/test";
const port = 25584;
// configure express to parse request body as JSON
app.use(express.json());

// endpoint to handle chat messages
app.post('/api/chat', (req, res) => {
  // get the chat message data from the request body
  const { chatId, memberId, message } = req.body;

  // connect to the MongoDB database
  MongoClient.connect(db, (err, client) => {
    if (err) throw err;

    // select the chat room collection
    const db = client.db('Chatapp');
    const collection = db.collection('my chats');

    // insert the chat message into the database
    collection.updateOne(
      { _id: chatId },
      { $push: { [memberId]: message } },
      { upsert: true },
      (err, result) => {
        if (err) throw err;
        res.status(200).json({ message: 'Chat message saved' });
        client.close();
      }
    );
  });
});



app.get('/test-db', (req, res) => {
    MongoClient.connect(db, (err, client) => {
      if (err) throw err;
      console.log('Database connection successful');
  
      const db = client.db('Chatapp');
      const collection = db.collection('my chats');
  
      // perform a sample query
      collection.findOne({ _id: 'sample-chat-id' }, (err, result) => {
        if (err) throw err;
        console.log('Sample query result:', result);
        res.send('Database connection and query successful');
        client.close();
      });
    });
  });
  

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});