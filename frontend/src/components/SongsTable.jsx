import { Fragment, useState } from "react";

const SongsTable = ({ songs }) => {

    const [expandedRow, setExpandedRow] = useState(null);

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

                        <Fragment key={song.index}>

                            <tr
                                onClick={() =>
                                    setExpandedRow(
                                        expandedRow === song.index
                                            ? null
                                            : song.index
                                    )
                                }
                                className="border-t hover:bg-gray-50 cursor-pointer"
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

                            {
                                expandedRow === song.index && (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="p-4 bg-gray-50"
                                        >
                                            <div className="grid md:grid-cols-3 gap-4">

                                                <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                                                    Cover Image
                                                </div>

                                                <div>
                                                    <button className="px-4 py-2 bg-blue-600 text-white rounded">
                                                        ▶ Play Preview
                                                    </button>
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold mb-2">
                                                        Review
                                                    </h3>

                                                    <p className="text-sm text-gray-600">
                                                        This is a sample review placeholder.
                                                    </p>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        </Fragment>

                    ))}

                </tbody>

            </table>
        </div>
    );
};

export default SongsTable;