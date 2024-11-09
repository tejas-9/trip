// server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Could not connect to MongoDB:", error));

// Define the User model (if not defined in a separate file)
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the EV Trip Planner API!");
});

// Login route (placeholder)
app.get("/login", (req, res) => {
    res.send("Login Page - This will be implemented with user authentication.");
});

// Trip Planner route (placeholder)
app.get("/trip", (req, res) => {
    res.send("Trip Planner Page - This will show the EV charging stations and optimize routes.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
