const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  postOwner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  postQuestion: {
    type: String,
    required: true,
  },
  postContent: {
    type: String,
    required: true,
  },
  postImage: {
    type: String,
  },
  postCategory: {
    type: String,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  likesNumber: {
    type: Number,
    default: 0,
  },
  commentsNumber: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      commentContent:{
          type: String,
          required:true
      },
      name:{
          type:String
      },
      date:{
          type: Date,
          default: Date.now,
      }
    },
  ],
});
