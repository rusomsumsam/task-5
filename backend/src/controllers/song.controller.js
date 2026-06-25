const {
    generateSongs
} = require("../generators/song.generator");

const getSongs = (req, res) => {

    const seed = req.query.seed || "123";

    const locale =
        req.query.locale || "en";

    const songs = generateSongs({
        seed,
        locale,
        count: 20
    });

    res.status(200).json({
        success: true,
        seed,
        locale,
        songs
    });

};

module.exports = {
    getSongs
};