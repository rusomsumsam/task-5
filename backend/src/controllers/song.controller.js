const getSongs = (req, res) => {

    res.status(200).json({
        success: true,
        songs: []
    });

};

module.exports = {
    getSongs
};