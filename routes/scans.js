const express = require("express");
const router = express.Router();

const {
  getAllScans,
  getScans,
  startScan,
  addScan,
  editScan,
  deleteScan,
} = require("../controller/scans");

router.get("/", getAllScans);

router.post("/getscans", getScans);

router.post("/start", startScan);
router.patch("/add", addScan);

router.put("/edit", editScan);

router.delete("/delete", deleteScan);

module.exports = router;
