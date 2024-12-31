import { Router } from "express";
import axios from "axios";

const router = Router();

router.post("/evaluate-price", async (req, res) => {
  try {
    const response = await axios.post(
      "https://real-ml-model.onrender.com/predict",
      req.body,
    );
    res.json({ predictedPrice: response.data.predicted_price });
  } catch (error) {
    console.error("Error communicating with Flask API:", error.message);
    res
      .status(500)
      .json({ error: "Failed to get prediction from the AI model" });
  }
});

export default router;
