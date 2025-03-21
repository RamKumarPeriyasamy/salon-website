const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const appointmentRoutes = require("./routes/appointments");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    // Use environment variable for MongoDB URI with fallback
    const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/salon";
    
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/appointments", appointmentRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
