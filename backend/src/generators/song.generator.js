const { faker } = require("@faker-js/faker");

const generateSongs = (count = 20) => {

    const songs = [];

    for (let i = 1; i <= count; i++) {

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