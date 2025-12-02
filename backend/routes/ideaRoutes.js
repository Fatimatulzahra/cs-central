import express from "express";
import { sendIdeaEmail } from "../utils/sendIdeaEmail.js";
import Idea from "../models/ideaModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, idea } = req.body;

    // Save idea to DB
    const newIdea = await Idea.create({ name, email, idea });
    // Send notification email
    await sendIdeaEmail({ name, email, idea });

    res.json({ message: "Idea sent! Thank you :)" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send idea." });
  }
});

export default router;
