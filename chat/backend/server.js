const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const cors = require("cors");
const getcontent = require("./getContent");

const app = express();
const db = "mongodb+srv://tobias:3EZkUJgct3QLHau@cluster0.v5e8lmx.mongodb.net/test";
const port = 5000;
// configure express to parse request body as JSON
mongoose.set("strictQuery", false);
mongoose.connect(db, {});

mongoose.connect("mongodb+srv://tobias:3EZkUJgct3QLHau@cluster0.v5e8lmx.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Chatapp"
    })
    .then(console.log("Connectet to mongoDB"))
    .catch((err) => console.log(err));

const user = new mongoose.Schema({
	mail: String,
	name: String,
	password: String,
	isAdmin: Boolean,
});
const userSchema = mongoose.model("User", user);

app.use(express.json());

const corsOptions = {
	origin: (origin, callback) => {
		if (!origin) {
			callback(null, true);
		} else {
			const allowedOrigins = ["http://localhost:3000"];
			const isAllowed = allowedOrigins.includes(origin);
			callback(isAllowed ? null : new Error("Origin not allowed"), isAllowed);
		}
	},
	// credentials: true,
};
app.use(cors(corsOptions));

app.post("/chats", (req, res) => {
	console.log(req.body);
	const chats = new Chat({
		user: req.body.username,
		chat: req.body.newMessage,
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

app.use("/get", getcontent)

app.listen(port, () => {
	console.log(`Backend server listening on port ${port}`);
});