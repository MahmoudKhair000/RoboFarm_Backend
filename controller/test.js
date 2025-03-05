const express = require("express");

const getMessage = async (req, res) => {
  res.send({ message: "Hello from the backend!" });
};

module.exports = { getMessage };
