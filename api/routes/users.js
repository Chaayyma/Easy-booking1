import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

import express from "express";

const router = express.Router();

// CREATE
router.post("/", createUser);

// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser);

// Users
router.get("/", verifyAdmin, getUsers);

// User/:ID
router.get("/:id", verifyUser, getUserById);

export default router;
