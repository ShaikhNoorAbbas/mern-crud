import express from "express";
import {
  registerCreate,
  registerDelete,
  registerRead,
  registerUpdate,
} from "../controllers/registerController.js";

const router = express.Router();

// Route to get all data
router.get("/", registerRead);

// Route to post all data
router.post("/", registerCreate);

// Route to update Data
router.put("/", registerUpdate);

// router to delete a Data
router.delete("/", registerDelete);

export default router;
