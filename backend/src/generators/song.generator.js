const {
    fakerEN_US,
    fakerDE
} = require("@faker-js/faker");

const { createRng } = require("../utils/seed.util");

const generateSongs = ({
    seed,
    locale = "en",
    page = 1,
    count = 20
}) => {

    const faker =
        locale === "de"
            ? fakerDE
            : fakerEN_US;

    const rng = createRng(`${seed}-${page}`);

    const songs = [];

    for (let i = 1; i <= count; i++) {

        faker.seed(
            Math.floor(rng() * 1000000)
        );

        const sequenceIndex =
            (page - 1) * count + i;

        songs.push({
            index: sequenceIndex,
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