const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  stylist: { type: String, required: true },
});

module.exports = mongoose.model("appointments", AppointmentSchema);
