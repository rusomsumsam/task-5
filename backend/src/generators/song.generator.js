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

    const prefixes = [
        "The",
        "Neon",
        "Electric",
        "Midnight",
        "Golden",
        "Silent",
        "Crystal",
        "Burning",
        "Northern",
        "Silver"
    ];

    const nouns = [
        "Wolves",
        "Echoes",
        "Rivers",
        "Rebels",
        "Horizons",
        "Dreamers",
        "Giants",
        "Lights",
        "Storms",
        "Voyagers"
    ];

    const prefix =
        prefixes[Math.floor(rng() * prefixes.length)];

    const noun =
        nouns[Math.floor(rng() * nouns.length)];

    return `${prefix} ${noun}`;
};

const generateAlbum = (faker, rng) => {

    if (rng() < 0.3) {
        return "Single";
    }

    return faker.music.album();
};

const generateReview = (rng) => {

    const reviews = [
        "A memorable track with strong vocals and an energetic rhythm.",
        "The production quality stands out from start to finish.",
        "A catchy melody paired with impressive instrumentation.",
        "One of the most engaging songs on the release.",
        "The song delivers a balanced mix of emotion and energy.",
        "A polished composition that remains enjoyable on repeated listens.",
        "Creative arrangements and strong musical hooks make this track shine.",
        "The performance feels authentic and professionally crafted.",
        "A well-produced song with a distinctive sound and memorable chorus.",
        "An enjoyable track that showcases excellent musical direction."
    ];

    return reviews[
        Math.floor(rng() * reviews.length)
    ];
};

const generatePreview = (rng) => {

    const notePool = [
        "C3", "D3", "E3", "F3", "G3", "A3", "B3",
        "C4", "D4", "E4", "F4", "G4", "A4", "B4",
        "C5", "D5", "E5", "F5", "G5", "A5", "B5"
    ];

    const notes = [];

    const noteCount =
        8 + Math.floor(rng() * 8);

    for (let i = 0; i < noteCount; i++) {

        notes.push(
            notePool[
            Math.floor(rng() * notePool.length)
            ]
        );

    }

    return {
        tempo: 100 + Math.floor(rng() * 60),
        notes
    };
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

    const contentRng = createRng(`${seed}-${page}`);
    const likesRng = createRng(`${seed}-${page}-likes`);

    const songs = [];

    for (let i = 1; i <= count; i++) {

        faker.seed(
            Math.floor(contentRng() * 1000000)
        );

        const sequenceIndex =
            (page - 1) * count + i;

        songs.push({
            index: sequenceIndex,
            id: i,

            title: faker.music.songName(),

            artist: generateArtist(
                faker,
                contentRng
            ),

            album: generateAlbum(
                faker,
                contentRng
            ),

            genre: faker.music.genre(),

            likes: generateLikes(
                likes,
                likesRng
            ),

            review: generateReview(
                contentRng
            ),

            preview: generatePreview(
                contentRng
            )
        });

    }

    return songs;
};

module.exports = {
    generateSongs
};