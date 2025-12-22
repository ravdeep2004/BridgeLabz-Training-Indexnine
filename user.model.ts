//perform crud operations using jwt implementation
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

export const User = mongoose.model("User", userSchema);
