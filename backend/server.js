const express = require("express");
const cors = require("cors");
require("dotenv").config(); // ✅ Load environment variables
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const appointmentRoutes = require("./routes/appointments");

const app = express();

app.use(cors());
app.use(express.json());

connectDB(); // ✅ Connect to MongoDB

// ✅ Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
