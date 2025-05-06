const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");

const treeSchema = mongoose.Schema({
  NoTree: { type: Number },
  location: {},
  status: {},
});
const lineSchema = mongoose.Schema({
  NoLine: { type: Number },
  rangeTemp: [],
  rangeHumi: [],
  rangeMois: [],
  trees: [treeSchema],
});
const scanSchema = mongoose.Schema({
  userFarm: { type: mongoose.Types.ObjectId },
  scanDay: { type: Date },
  lines: [lineSchema],
});

module.exports = mongoose.model("scan", scanSchema);
