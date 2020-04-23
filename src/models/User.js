const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    password: { type: String, required: true, select: false },
    admin: { type: Boolean }
});

module.exports = User = mongoose.model('User', UserSchema);