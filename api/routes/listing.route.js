import express from "express";
import { createListing } from "../controllers/listing.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
// Create a new listing
router.post("/create", verifyToken, createListing);

export default router;
