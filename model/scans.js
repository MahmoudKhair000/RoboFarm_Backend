const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");

const treeSchema = mongoose.Schema(
  {
    NoTree: { type: Number },
    location: {},
    status: {},
  },
  { _id: false }
);
const lineSchema = mongoose.Schema(
  {
    NoLine: { type: Number },
    rangeTemp: [{ type: Number }],
    rangeHumi: [{ type: Number }],
    rangeMois: [{ type: Number }],
    trees: [treeSchema],
  },
  { _id: false }
);
const scanSchema = mongoose.Schema({
  userFarm: { type: mongoose.Types.ObjectId },
  scanDay: {
    type: String,
    required: true,
    default: new Date().toISOString().split("T")[0],
  },
  scanHour: {
    type: String,
    required: true,
    default: new Date().toISOString().split("T")[1],
  },
  lines: [lineSchema],
});

// console.log(new Date().toISOString().split("T")[0])

module.exports = mongoose.model("scan", scanSchema);
