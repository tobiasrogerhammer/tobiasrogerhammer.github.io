const mongoose = require("mongoose");

const message = new mongoose.Schema({
	user: String,
	message: String,
	time: Number,
});
module.exports = mongoose.model("message", message);

