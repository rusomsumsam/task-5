const { faker } = require("@faker-js/faker");
const { createRng } = require("../utils/seed.util");

const generateSongs = (seed, count = 20) => {

    const rng = createRng(seed);

    const songs = [];

    for (let i = 1; i <= count; i++) {

        faker.seed(Math.floor(rng() * 1000000));

        songs.push({
            id: i,
            title: faker.music.songName(),
            artist: faker.person.fullName(),
            album: faker.music.album(),
            genre: faker.music.genre()
        });

    }

    return songs;
};

module.exports = {
    generateSongs
};