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

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center gap-3 py-3">

                    {/* Language Selection */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                        </svg>
                        <select
                            value={locale}
                            onChange={(e) => {
                                setLocale(e.target.value);
                                setPage(1);

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }}
                            className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 pr-8 text-sm hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em 1.5em'
                            }}
                        >
                            <option value="en">
                                English (US)
                            </option>

                            <option value="de">
                                German (DE)
                            </option>
                        </select>
                    </div>

                    <div className="w-px h-7 bg-gray-200 hidden sm:block" />

                    {/* Seed Configuration */}
                    <div className="flex items-center gap-0.5 flex-1 min-w-50">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                        <input
                            type="text"
                            value={seed}
                            onChange={(e) => {
                                setSeed(e.target.value);
                                setPage(1);

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });

                            }}
                            placeholder="Seed"
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none font-mono min-w-25"
                        />
                        <button
                            onClick={generateRandomSeed}
                            className="inline-flex items-center gap-1 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-3 py-1.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow text-sm font-medium"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Random Seed
                        </button>
                    </div>

                    <div className="w-px h-7 bg-gray-200 hidden sm:block" />

                    {/* Likes */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <input
                            type="number"
                            min="0"
                            max="10"
                            step="0.1"
                            value={likes}
                            onChange={(e) => {

                                const value = e.target.value;

                                if (value === "") {
                                    setLikes("");
                                    return;
                                }

                                const val = parseFloat(value);

                                if (val >= 0 && val <= 10) {
                                    setLikes(value);
                                    setPage(1);

                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                }
                            }}
                            className="w-20 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                            placeholder="0"
                        />
                        
                    </div>

                    <div className="w-px h-7 bg-gray-200 hidden md:block" />

                    {/* View Toggle */}
                    <div className="flex items-center gap-1 ml-auto bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => {
                                setView("table");
                                setPage(1);

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });

                            }}
                            className={`px-3 py-1.5 rounded-md transition-all duration-200 text-sm font-medium flex items-center gap-1.5 ${view === "table"
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Table
                        </button>

                        <button
                            onClick={() => {
                                setView("gallery");
                                setPage(1);

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }}
                            className={`px-3 py-1.5 rounded-md transition-all duration-200 text-sm font-medium flex items-center gap-1.5 ${view === "gallery"
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            Gallery
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Toolbar;