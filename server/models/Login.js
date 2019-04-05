const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log("in login schema");

const loginSchema = new Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;