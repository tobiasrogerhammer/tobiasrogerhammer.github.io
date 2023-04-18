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

const message = new mongoose.Schema({
	user: String,
	message: String,
	time: Number,
});

const user = new mongoose.Schema({
	mail: String,
	name: String,
	password: String,
	isAdmin: Boolean,
});
const User = mongoose.model("User", user);

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

app.use("/get", getcontent)

app.listen(port, () => {
	console.log(`Backend server listening on port ${port}`);
});