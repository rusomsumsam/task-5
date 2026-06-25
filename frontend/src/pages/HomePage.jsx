import { useEffect, useState } from "react";
import axios from "axios";
import Toolbar from "../components/Toolbar";

const HomePage = () => {

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [seed, setSeed] = useState("123");

    const [locale, setLocale] = useState("en");

    const [likes, setLikes] = useState(3.7);

    useEffect(() => {

        const fetchSongs = async () => {

            try {

                const response = await axios.get(
                    "http://localhost:3001/api/songs",
                    {
                        params: {
                            seed,
                            locale,
                            page: 1,
                            likes
                        }
                    }
                );

                setSongs(response.data.songs);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchSongs();

    }, [seed, locale, likes]);

    if (loading) {
        return (
            <div className="p-10 text-center">
                Loading...
            </div>
        );
    }

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
            />

            <div className="space-y-3">

                {songs.map((song) => (

                    <div
                        key={song.index}
                        className="border rounded-lg p-4"
                    >
                        <p>
                            <strong>{song.index}</strong>
                        </p>

                        <p>{song.title}</p>

                        <p>{song.artist}</p>

                        <p>{song.album}</p>

                        <p>{song.genre}</p>

                        <p>❤️ {song.likes}</p>
                    </div>

                ))}

            </div>

        </div>
    );
};

export default HomePage;