const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    postQuestion: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
    },
    postCategory:{
        type: String,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    createdDate:{
        type: Date,
        default: Date.now,
    }
})