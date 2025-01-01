import express from "express";
import {
  signup,
  signin,
  google,
  signOut,
} from "../controllers/auth.controllers.js";
const router = express.Router();
//importing the signup signin google signout function from the auth.controller.js file
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
export default router;
