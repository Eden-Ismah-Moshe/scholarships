const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const scholarshipsRoutes = require("./routes/scholarshipsRoutes");
require("dotenv").config();

const app = express();

// Allow requests from localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/scholarships", scholarshipsRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
