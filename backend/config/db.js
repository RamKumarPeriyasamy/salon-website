// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected Successfully");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/salonDB', {
      useNewUrlParser: true, // Remove this if you are using mongoose v6+
      useUnifiedTopology: true, // Remove this if you are using mongoose v6+
    });

    console.log('✅ MongoDB Connected...');
  } catch (err) {
    console.error(`❌ MongoDB Connection Failed: ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
