const express = require("express");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const scanModel = require("../model/scans");

const getAllScans = async (req, res) => {
  try {
    let scans = await scanModel.find();
    res.status(200).send({ message: "getAllScans", data: scans });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
const getScans = async (req, res) => {
  let { id } = req.body;
  try {
    let scan = await scanModel.findOne({ _id: id });
    res.status(200).json({ data: scan });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const startScan = async (req, res) => {
  let scan = req.body;
  try {
    const startedScan = await scanModel.create(scan);
    try {
      res.status(200).send({ Saved_Data: startedScan });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addScan = async (req, res) => {};
const editScan = async (req, res) => {};
const deleteScan = async (req, res) => {
  let { id } = req.body;
  try {
    await scanModel.findOneAndDelete({ _id: id });
    res.status(200).send("deleted successfully!!");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getAllScans, getScans, startScan, addScan, editScan, deleteScan };
