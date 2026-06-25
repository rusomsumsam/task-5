const {
    generateSongs
} = require("../generators/song.generator");

const getSongs = (req, res) => {

    const seed = req.query.seed || "123";

    const locale =
        req.query.locale || "en";

    const page =
        Number(req.query.page) || 1;

    const likes =
        Number(req.query.likes) || 0;

    const songs = generateSongs({
        seed,
        locale,
        page,
        likes,
        count: 20
    });

    res.status(200).json({
        success: true,
        seed,
        locale,
        page,
        likes,
        songs
    });

};

module.exports = {
    getSongs
};