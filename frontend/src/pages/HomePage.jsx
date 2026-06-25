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
                    "http://localhost:3001/api/songs",
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

            <h1 className="text-3xl font-bold mb-6">
                Music Store
            </h1>

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
                    <div className="flex items-center justify-center gap-3 mt-6">

                        <button
                            onClick={() =>
                                setPage((prev) => Math.max(prev - 1, 1))
                            }
                            className="px-4 py-2 border rounded"
                        >
                            Previous
                        </button>

                        <span className="font-semibold">
                            Page {page}
                        </span>

                        <button
                            onClick={() =>
                                setPage((prev) => prev + 1)
                            }
                            className="px-4 py-2 border rounded"
                        >
                            Next
                        </button>

                    </div>
                )
            }

        </div>
    );
};

export default HomePage;