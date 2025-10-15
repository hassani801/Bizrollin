import { User } from "../models/User.js";
import { Post } from "../models/Posts.js";

// ---------------------------------------------------------
// Create new user
export const createUser = async (req, res) => {
  try {
    const { employee_name, role, image } = req.body;

    // Validate required fields
    if (!employee_name || !role) {
      return res.status(400).json({ error: "Name and role are required" });
    }

    // Create new user (image is optional)
    const user = new User({
      employee_name,
      role,
      image: image || "https://via.placeholder.com/150", // fallback if no image
    });

    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted", deletedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------------------------------
// Create Post
export const createPost = async (req, res) => {
  try {
    const { title, date, event, body, image } = req.body; // ✅ include image
    if (!title || !date || !event || !body) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const post = new Post({ title, date, event, body, image }); // ✅ save image too
    await post.save();
    res.status(201).json({ message: "Post created", post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted", deletedPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
