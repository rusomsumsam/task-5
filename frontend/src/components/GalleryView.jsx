import InfiniteScroll from "react-infinite-scroll-component";
import CoverCard from "./CoverCard";

const GalleryView = ({
    songs,
    fetchMoreSongs
}) => {

    return (
        <InfiniteScroll
            dataLength={songs.length}
            next={fetchMoreSongs}
            hasMore={true}
            loader={
                <h4 className="text-center mt-4">
                    Loading...
                </h4>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {songs.map((song) => (

                    <div
                        key={`${song.index}-${song.id}`}
                        className="border rounded-lg p-4"
                    >
                        <CoverCard song={song} />

                        <h3 className="font-semibold">
                            {song.title}
                        </h3>

                        <p>{song.artist}</p>

                        <p>❤️ {song.likes}</p>

                    </div>

                ))}

            </div>
        </InfiniteScroll>
    );
};

export default GalleryView;
