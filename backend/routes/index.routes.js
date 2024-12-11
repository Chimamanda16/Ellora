const express = require("express");
const router = express.Router();
const uploadRouter = require("./upload.routes");


router.use("/", uploadRouter);

module.exports = router;