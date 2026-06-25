const SongsTable = ({ songs }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 text-left">#</th>
                        <th className="p-3 text-left">Song</th>
                        <th className="p-3 text-left">Artist</th>
                        <th className="p-3 text-left">Album</th>
                        <th className="p-3 text-left">Genre</th>
                        <th className="p-3 text-left">Likes</th>
                    </tr>
                </thead>

                <tbody>
                    {songs.map((song) => (
                        <tr
                            key={song.index}
                            className="border-t hover:bg-gray-50"
                        >
                            <td className="p-3">
                                {song.index}
                            </td>

                            <td className="p-3">
                                {song.title}
                            </td>

                            <td className="p-3">
                                {song.artist}
                            </td>

                            <td className="p-3">
                                {song.album}
                            </td>

                            <td className="p-3">
                                {song.genre}
                            </td>

                            <td className="p-3">
                                ❤️ {song.likes}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongsTable;