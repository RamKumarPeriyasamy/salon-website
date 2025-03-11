const express = require("express");
const { getAllAppointments, deleteAppointment } = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware"); // ✅ Fix Import Path

const router = express.Router();

// ✅ Get all appointments (Admin Only)
router.get("/appointments", auth, getAllAppointments);

// ✅ Delete appointment (Admin Only)
router.delete("/appointments/:id", auth, deleteAppointment);

module.exports = router;
