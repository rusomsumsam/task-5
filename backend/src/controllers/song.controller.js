const {
    generateSongs
} = require("../generators/song.generator");

const getSongs = (req, res) => {

    const seed = req.query.seed || "123";

    const songs = generateSongs({
        seed,
        count: 20
    });

    res.status(200).json({
        success: true,
        seed,
        songs
    });

};

module.exports = {
    getSongs
};