import mongoose from "mongoose";

// USER
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
});
export const User = mongoose.model("User", userSchema, "users");
