import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// Mongoose
export default function connectDB() {
    mongoose.connect(`${process.env.MONGODB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", () => console.error("Mongoose Connection Error"));
    db.once("open", () => console.log("Mongoose Connected"));
}
