import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchSongs = async () => {

            try {

                const response = await axios.get(
                    "http://localhost:3001/api/songs",
                    {
                        params: {
                            seed: 123,
                            locale: "en",
                            page: 1,
                            likes: 3.7
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

    }, []);

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