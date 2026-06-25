const express = require("express");
const cors = require("cors");

const registerRoutes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Music Store API Running"
    });
});

registerRoutes(app);

module.exports = app;