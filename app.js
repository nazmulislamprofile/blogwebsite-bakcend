import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import apiRoutes from "./routes/api.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
