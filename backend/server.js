const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Declare only once
require("dotenv").config();

const app = express();
app.use(cors()); // ✅ Apply CORS once
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Appointment Schema
const AppointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  location: String,
  stylist: String,
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

// 📌 Route to Save Appointment
app.post("/book-appointment", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "✅ Appointment Booked", appointment });
  } catch (error) {
    res.status(500).json({ message: "❌ Error Booking Appointment" });
  }
});

// 📌 Route to Get All Appointments (For Admin)
app.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "❌ Error Fetching Appointments" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
