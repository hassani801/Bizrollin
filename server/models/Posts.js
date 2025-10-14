// models/Post.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  event: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.model("Post", postSchema);
