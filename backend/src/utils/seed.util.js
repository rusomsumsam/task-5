const seedrandom = require("seedrandom");

const createRng = (seed) => {
    return seedrandom(seed);
};

module.exports = {
    createRng
};