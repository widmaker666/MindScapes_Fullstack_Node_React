const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connecté à MongoDB");
  } catch (err) {
    console.error("Erreur de connexion à MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
