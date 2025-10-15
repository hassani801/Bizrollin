import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    employee_name: { type: String, required: true, unique: true, trim: true },
    role: { type: String, required: true, lowercase: true },
  image: { type: String },

  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
