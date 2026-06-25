const express = require("express");

const router = express.Router();

const {
    getSongs
} = require("../controllers/song.controller");

router.get("/", getSongs);

module.exports = router;