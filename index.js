const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  })
);
dotenv.config();
mongoose
  .connect(
    "mongodb://localhost:27017/robofarm"
    // "mongodb+srv://Group1:Pass4Group1@cluster0.3u0tj.mongodb.net/robotapp"
  )
  .then(() => {
    console.log("Connected to db successefully... !!");
  })
  .catch((err) => {
    console.log(err);
  });

const testRoutes = require("./routes/test");
app.use("/apitest", testRoutes);

const scanRoutes = require("./routes/scans");
app.use("/scans", scanRoutes);

app.listen(4000, () => console.log("connected to port 4000!!"));

const fieldScans = require("./fieldScanTest");
// console.log("fieldScans:", JSON.stringify(fieldScans));

app.get("/api/test", (req, res) => {
  res.send(fieldScans);
});

// export the app for vercel serverless functions
module.exports = app;
