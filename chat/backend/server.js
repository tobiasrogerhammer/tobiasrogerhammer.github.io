const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const cors = require("cors");
const getcontent = require("./getContent");
const getUser = require("./getuser");
const user = require('./user');

const app = express();
const db = "mongodb+srv://tobias:3EZkUJgct3QLHau@cluster0.v5e8lmx.mongodb.net/test";
const port = 5000;

mongoose.set("strictQuery", false);
mongoose.connect(db, {});
mongoose.connect("mongodb+srv://tobias:3EZkUJgct3QLHau@cluster0.v5e8lmx.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Chatapp"
    })
    .then(console.log("Connected to mongoDB"))
    .catch((err) => console.log(err));

app.use(express.json());

/* const corsOptions = {
	origin: (origin, callback) => {
		if (!origin) {
			callback(null, true);
		} else {
			const allowedOrigins = ["http://localhost:3000"];
			const isAllowed = allowedOrigins.includes(origin);
			callback(isAllowed ? null : new Error("Origin not allowed"), isAllowed);
		}
		
	}, 
};
*/

app.use(
	cors({
		origin: "http://localhost:3000", 
		methods: "GET,POST,PUT,DELETE",
		credentials: true
	})
);

app.post("/chats", (req, res) => {
	console.log(req.body);
	const chats = new Chat({
		user: req.body.user,
		message: req.body.message,
		time: req.body.time,
		
	});

	newChat
		.save()
		.then((savedData) => {
			console.log("Saved data:", savedData);
			res.send("Data received and saved successfully");
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error saving data");
		});
});

app.post("/usernames", (req, res) => {
	console.log(req.body);
	const usernames = new Username({
		username: req.body.username,
		mailadress: req.body.mailadress,
		password: req.body.password,
		selectedChats: req.body.selectedChats,
		
	});

	newUsername
		.save()
		.then((savedData) => {
			console.log("Saved data:", savedData);
			res.send("Data received and saved successfully");
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error saving data");
		});
});

app.use("/get", getcontent)
app.use("/user", getUser)

app.listen(port, () => {
	console.log(`Backend server listening on port ${port}`);
});