const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  bio: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  joinedDate: {
    type: Date,
    default: Date.now,
  },
});

User = mongoose.modle("user", UserSchema);
module.exports = User;
