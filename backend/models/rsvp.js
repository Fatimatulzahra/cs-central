import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  name: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("RSVP", rsvpSchema);
