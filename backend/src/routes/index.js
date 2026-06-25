const songRoutes = require("./song.routes");

const registerRoutes = (app) => {

    app.use("/api/songs", songRoutes);

};

module.exports = registerRoutes;