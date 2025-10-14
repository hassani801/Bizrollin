import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
  createPost,
  getPosts,
  deletePost,
} from "../controllers/auth-controllers.js";

const router = express.Router();

// User routes
router.post("/users", createUser);       // Create user
router.get("/users", getUsers);          // Get all users
router.delete("/users/:id", deleteUser); // Delete user

// Post routes
router.post("/posts", createPost);        // Create post
router.get("/posts", getPosts);           // Get all posts
router.delete("/posts/:id", deletePost);  // Delete post

export default router;
