const Toolbar = ({
    seed,
    setSeed,
    locale,
    setLocale,
    likes,
    setLikes,
    setPage,
    view,
    setView
}) => {

    const generateRandomSeed = () => {

        const randomSeed =
            Math.floor(
                Math.random() * Number.MAX_SAFE_INTEGER
            );

        setSeed(randomSeed.toString());
        setPage(1);
    };

    return (
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white rounded-lg shadow">

            <select
                value={locale}
                onChange={(e) => {
                    setLocale(e.target.value);
                    setPage(1);
                }}
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
                onChange={(e) => {
                    setSeed(e.target.value);
                    setPage(1);
                }}
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
                onChange={(e) => {
                    setLikes(e.target.value);
                    setPage(1);
                }}
                className="border rounded px-3 py-2 w-28"
            />

            <div className="flex gap-2">

                <button
                    onClick={() => {
                        setView("table");
                        setPage(1);
                    }}
                    className={`px-4 py-2 rounded ${view === "table"
                            ? "bg-blue-600 text-white"
                            : "border"
                        }`}
                >
                    Table
                </button>

                <button
                    onClick={() => {
                        setView("gallery");
                        setPage(1);
                    }}
                    className={`px-4 py-2 rounded ${view === "gallery"
                            ? "bg-blue-600 text-white"
                            : "border"
                        }`}
                >
                    Gallery
                </button>

            </div>

        </div>
    );
};

export default Toolbar;