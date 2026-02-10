const express = require("express");
const router = express.Router();

const controller = require("../controllers/video.controller");

router.get("/video", controller.getVideoCompleto);

module.exports = router;
