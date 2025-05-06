const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const {
  getAllScans,
  getScans,
  addScan,
  editScan,
  deleteScan,
} = require("../controller/scans");

router.get("/", getAllScans);
router.post("/getscans", getScans);
router.post("/scan", addScan);
router.put("/edit", editScan);
router.delete("/delete", deleteScan);

module.exports = router;
