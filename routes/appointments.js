const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// 📌 Route to Create Appointment (Remove auth if it's public)
router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming Request:", req.body);
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "✅ Appointment Booked Successfully", appointment });
  } catch (error) {
    console.error("❌ Error Booking Appointment:", error);
    res.status(500).json({ message: "❌ Error Booking Appointment", error });
  }
});

// 📌 Route to Get All Appointments (Admin Only)
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error("❌ Error Fetching Appointments:", error);
    res.status(500).json({ message: "❌ Error Fetching Appointments", error });
  }
});

module.exports = router;
