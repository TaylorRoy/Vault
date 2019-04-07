const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log("in newpassword schema");

const NewPasswordSchema = new Schema({
	username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    userId: { type: String, required: true}
});
const NewPassword = mongoose.model("newPassword", NewPasswordSchema);

module.exports = NewPassword;