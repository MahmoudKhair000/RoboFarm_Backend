const express = require("express");
const router = express.Router();
const { getMessage } = require("../controller/test");

//    http://localhost:3000/hello
router.get("/hello", getMessage);

module.exports = router;
