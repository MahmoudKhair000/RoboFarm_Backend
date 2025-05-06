const express = require("express");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const scanModel = require("../model/scans");

const getAllScans = (req, res) => {
  res.status(202).send({ message: "getAllScans" });
};
const getScans = (req, res) => {};
const addScan = (req, res) => {
  let scan = req.body;
  try {
    let addedScan = scanModel.create(scan);
    try {
      res.status(200).json({ data: scan });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const editScan = (req, res) => {};
const deleteScan = (req, res) => {};

module.exports = { getAllScans, getScans, addScan, editScan, deleteScan };
