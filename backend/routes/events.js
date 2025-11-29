import express from "express";
import RSVP from "../models/rsvp.js";
import { sendConfirmationEmail } from "../utils/sendEmail.js";

const router = express.Router();

// TEST ROUTE
router.get("/test", (req, res) => {
  res.json({ message: "Events route is working!" });
});

// POST /api/events/:id/rsvp
router.post("/:id/rsvp", async (req, res) => {
  try {
    const { name, email } = req.body;
    const eventId = req.params.id;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    // Save RSVP to database
    await RSVP.create({ eventId, name, email });

    // Send confirmation email + calendar invite
    await sendConfirmationEmail({ name, email });

    return res.json({ message: "RSVP received and confirmation email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while submitting RSVP" });
  }
});

export default router;
