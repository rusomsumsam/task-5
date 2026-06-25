import { useEffect, useState } from "react";
import axios from "axios";

import Toolbar from "../components/Toolbar";
import SongsTable from "../components/SongsTable";
import GalleryView from "../components/GalleryView";

const HomePage = () => {

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [seed, setSeed] = useState("123");
    const [locale, setLocale] = useState("en");
    const [likes, setLikes] = useState(3.7);

    const [page, setPage] = useState(1);
    const [view, setView] = useState("table");

    useEffect(() => {

        const fetchSongs = async () => {

            try {

                const response = await axios.get(
                    "https://task-5-5xvc.onrender.com/api/songs",
                    {
                        params: {
                            seed,
                            locale,
                            page,
                            likes
                        }
                    }
                );

                if (view === "gallery") {

                    setSongs((prevSongs) => {

                        if (page === 1) {
                            return response.data.songs;
                        }

                        return [
                            ...prevSongs,
                            ...response.data.songs
                        ];
                    });

                } else {

                    setSongs(response.data.songs);

                }

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchSongs();

    }, [seed, locale, likes, page, view]);

    if (loading) {
        return (
            <div className="p-10 text-center">
                Loading...
            </div>
        );
    }

    const fetchMoreSongs = () => {

        setPage((prev) => prev + 1);

    };
    

    return (
        <div className="p-10">

            <Toolbar
                seed={seed}
                setSeed={setSeed}
                locale={locale}
                setLocale={setLocale}
                likes={likes}
                setLikes={setLikes}
                setPage={setPage}
                view={view}
                setView={setView}
            />

            {
                view === "table"
                    ? <SongsTable songs={songs} />
                    : <GalleryView
                        songs={songs}
                        fetchMoreSongs={fetchMoreSongs}
                    />
            }

            {
                view === "table" && (
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className={`px-3 py-2 rounded-lg transition-all duration-200 ${page === 1
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Always show 4 page numbers */}
                        {(() => {
                            const totalPages = 4;
                            let startPage = Math.max(1, page - 2);
                            let endPage = startPage + totalPages - 1;

                            // Adjust if we're near the beginning
                            if (page <= 3) {
                                startPage = 1;
                                endPage = 4;
                            }

                            const pages = [];
                            for (let i = startPage; i <= endPage; i++) {
                                pages.push(i);
                            }

                            return pages.map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`px-3.5 py-2 rounded-lg transition-all duration-200 font-medium min-w-[40px] ${p === page
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    {p}
                                </button>
                            ));
                        })()}

                        <button
                            onClick={() => setPage((prev) => prev + 1)}
                            className="px-3 py-2 bg-white text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )
            }

        </div>
    );
};

export default HomePage;