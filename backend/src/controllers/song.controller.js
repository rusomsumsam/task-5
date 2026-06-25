const {
    generateSongs
} = require("../generators/song.generator");

const getSongs = (req, res) => {

    const songs = generateSongs();

    res.status(200).json({
        success: true,
        songs
    });

};

module.exports = {
    getSongs
};