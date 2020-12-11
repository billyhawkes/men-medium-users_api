import express from "express";
import connectDB from "./db/db.js";
import { User } from "./db/schema.js";
import bodyParser from "body-parser";

const app = express();
connectDB();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Home");
});

// All Users
app.get("/api/users", (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            console.error(err);
        } else {
            res.json(docs);
        }
    });
});
// Single User, Username
app.get("/api/users/:username", (req, res) => {
    const name = req.params.username;
    User.findOne({ username: name }, (err, doc) => {
        if (err) {
            console.error(err);
        } else {
            doc ? res.json(doc) : res.send(`No User with Username: ${name}`);
        }
    });
});

// Add User
app.post("/api/users", (req, res) => {
    const newUser = new User({ ...req.body });
    newUser.save((err) => {
        if (err) {
            console.error("Post Request Failed");
        } else {
            res.send("Added User");
        }
    });
});

app.listen(PORT, () => console.log("Server Started"));
