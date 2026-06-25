const {
    fakerEN_US,
    fakerDE
} = require("@faker-js/faker");

const { createRng } = require("../utils/seed.util");

const generateLikes = (averageLikes, rng) => {

    const baseLikes = Math.floor(averageLikes);

    const fraction = averageLikes - baseLikes;

    const extraLike =
        rng() < fraction ? 1 : 0;

    return baseLikes + extraLike;
};

const generateSongs = ({
    seed,
    locale = "en",
    page = 1,
    likes = 0,
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
            genre: faker.music.genre(),
            likes: generateLikes(likes, rng)
        });

    }

    return songs;
};

module.exports = {
    generateSongs
};