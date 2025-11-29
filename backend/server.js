import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";
import rsvpRoutes from "./routes/events.js";  
import ideaRoutes from "./routes/ideaRoutes.js";


const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend-url.vercel.app"],
  methods: ["GET", "POST"],
  credentials: true
})); // Adjust origins as needed
app.use(express.json());

// Routes 
app.use("/api/events", eventRoutes);
app.use("/api/events", rsvpRoutes);
app.use("/api/ideas", ideaRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic route
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

