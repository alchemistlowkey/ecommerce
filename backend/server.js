import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./route/userRoute.js";

// App config
const app = express();
const port = process.env.port || 4000;
connectDB();
connectCloudinary;

// Middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server started on port : " + port));