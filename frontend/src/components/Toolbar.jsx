const Toolbar = ({
    seed,
    setSeed,
    locale,
    setLocale,
    likes,
    setLikes
}) => {

    const generateRandomSeed = () => {

        const randomSeed =
            Math.floor(
                Math.random() * Number.MAX_SAFE_INTEGER
            );

        setSeed(randomSeed.toString());
    };

    return (
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white rounded-lg shadow">

            <select
                value={locale}
                onChange={(e) =>
                    setLocale(e.target.value)
                }
                className="border rounded px-3 py-2"
            >
                <option value="en">
                    English (US)
                </option>

                <option value="de">
                    German (DE)
                </option>
            </select>

            <input
                type="text"
                value={seed}
                onChange={(e) =>
                    setSeed(e.target.value)
                }
                placeholder="Seed"
                className="border rounded px-3 py-2"
            />

            <button
                onClick={generateRandomSeed}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Random Seed
            </button>

            <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                value={likes}
                onChange={(e) =>
                    setLikes(Number(e.target.value))
                }
                className="border rounded px-3 py-2 w-28"
            />

        </div>
    );
};

export default Toolbar;