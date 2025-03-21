const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "✅ Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error booking appointment", error });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching appointments", error });
  }
};
