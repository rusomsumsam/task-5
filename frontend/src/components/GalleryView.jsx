const GalleryView = ({ songs }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {songs.map((song) => (

                <div
                    key={song.index}
                    className="border rounded-lg p-4 shadow-sm"
                >
                    <div className="h-40 bg-gray-200 rounded mb-3" />

                    <h3 className="font-semibold">
                        {song.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                        {song.artist}
                    </p>

                    <p className="mt-2">
                        ❤️ {song.likes}
                    </p>
                </div>

            ))}

        </div>
    );
};

export default GalleryView;