const Appointment = require("../models/Appointment");

// ✅ Get All Appointments (Only for Admins)
exports.getAllAppointments = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "❌ Access Denied" });
  }

  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "❌ Error Fetching Appointments", error });
  }
};

// ✅ Delete Appointment (Only for Admins)
exports.deleteAppointment = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "❌ Access Denied" });
  }

  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error Deleting Appointment", error });
  }
};
