const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }
})

User = mongoose.modle('user', UserSchema);
module.exports = User;
