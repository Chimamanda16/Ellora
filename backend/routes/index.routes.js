const express = require("express");
const router = express.Router();
const uploadRouter = require("./products.routes");


router.use("/", uploadRouter);

module.exports = router;