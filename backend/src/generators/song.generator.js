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

const generateArtist = (faker, rng) => {

    if (rng() < 0.5) {
        return faker.person.fullName();
    }

    return `${faker.word.adjective()} ${faker.word.noun()}s`;
};

const generateAlbum = (faker, rng) => {

    if (rng() < 0.3) {
        return "Single";
    }

    return faker.music.album();
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
            artist: generateArtist(faker, rng),
            album: generateAlbum(faker, rng),
            genre: faker.music.genre(),
            likes: generateLikes(likes, rng),

            review: "Excellent production quality with memorable melodies and strong instrumentation.",

            cover: `https://picsum.photos/seed/${seed}-${page}-${i}/300/300`
        });   
    }

    return songs;
};

module.exports = {
    generateSongs
};