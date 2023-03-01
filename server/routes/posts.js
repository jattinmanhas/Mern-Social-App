import express from "express";
import {getFeedPosts, getUserPosts, likePost, getAllUsers, deletePost} from "../Controllers/posts.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

router.get("/",verifyToken, getFeedPosts);

router.get("/:userId/posts", verifyToken, getUserPosts);

router.patch("/:id/like", verifyToken, likePost);

router.get("/all",getAllUsers);

router.delete("/:postId", verifyToken, deletePost);


export default router