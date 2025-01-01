import { Router } from "express";
import axios from "axios";

const router = Router();
// Route to evaluate the price of a house
router.post("/evaluate-price", async (req, res) => {
  try {
    // Send the request to the Flask API
    const response = await axios.post(
      "https://real-ml-model.onrender.com/predict",
      req.body,
    );
    // Send the response back to the client
    res.json({ predictedPrice: response.data.predicted_price });
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error("Error communicating with Flask API:", error.message);
    res
      .status(500)
      .json({ error: "Failed to get prediction from the AI model" });
  }
});

export default router;
