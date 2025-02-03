import priceEvaluatorRouter from "./routes/priceEvaluator.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import cors from "cors";
import path from "path";
import contactRouter from "./routes/contact.js";
// Load env variables
dotenv.config();
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb!");
  })
  .catch((err) => {
    console.log(err);
  });
// Create express app
const __dirname = path.resolve();
// Create express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// Listen on port 3000
app.listen(3000, () => {
  console.log("server is running live\n");
});
// Serve robots.txt from public directory
app.use(
  "/robots.txt",
  express.static(path.join(__dirname, "public/robots.txt")),
);
// Use the route
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
// Use the route
app.use("/api", priceEvaluatorRouter);
app.use("/api", contactRouter);
// Serve the static files
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
