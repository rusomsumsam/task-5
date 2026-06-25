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
                <div className="text-center mt-8 py-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
                    <p className="mt-2 text-gray-500">Loading more songs...</p>
                </div>
            }
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">

                {songs.map((song) => (

                    <div
                        key={`${song.index}-${song.id}`}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group"
                    >
                        <div className="relative overflow-hidden">
                            <CoverCard song={song} />
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                #{song.index}
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 text-lg truncate">
                                {song.title}
                            </h3>

                            <p className="text-gray-600 text-sm truncate">
                                {song.artist}
                            </p>

                            <div className="mt-3 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold">
                                    ❤️ {song.likes}
                                </span>
                                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                                    {song.genre}
                                </span>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </InfiniteScroll>
    );
};

export default GalleryView;