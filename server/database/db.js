import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URI = process.env.MONGO_DB_URI;

export const connectDB = async () => {
  console.log("Loaded URI:", URI);  // 👈 Debug line

  if (!URI) {
    console.error("❌ MONGO_DB_URI is missing in .env file");
    process.exit(1);
  }

  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
