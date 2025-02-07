import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { register, login } from "../controllers/authController.js";
import {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
  } from "../controllers/blogController.js";

const router = express.Router();

// Authentication Routes
router.post("/register", register);
router.post("/login", login);

// Blog Routes
router.get("/getBlogs",getBlogs);
router.get("/getBlogById/:id",getBlogById);
router.post("/createBlog", createBlog);
router.put("/updateBlog/:id",updateBlog);
router.delete("/deleteBlog/:id",deleteBlog);

export default router;
  
