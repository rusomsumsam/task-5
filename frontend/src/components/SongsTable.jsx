import { Fragment, useState } from "react";
import CoverCard from "./CoverCard";
import * as Tone from "tone";

const SongsTable = ({ songs }) => {

    const [expandedRow, setExpandedRow] = useState(null);

    const playPreview = async (preview) => {

        await Tone.start();

        const synth = new Tone.Synth().toDestination();

        const now = Tone.now();

        preview.notes.forEach((note, index) => {

            synth.triggerAttackRelease(
                note,
                "8n",
                now + index * 0.3
            );

        });

    };

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
                                            className="p-6 bg-gray-50"
                                        >
                                            <div className="flex flex-col md:flex-row gap-6">

                                                <div className="w-48 shrink-0">
                                                    <CoverCard song={song} />
                                                </div>

                                                <div className="flex-1">

                                                    <h2 className="text-2xl font-bold">
                                                        {song.title}
                                                    </h2>

                                                    <p className="text-lg text-gray-600 mt-1">
                                                        {song.artist}
                                                    </p>

                                                    <p className="mt-2 text-gray-500">
                                                        Album: {song.album}
                                                    </p>

                                                    <p className="text-gray-500">
                                                        Genre: {song.genre}
                                                    </p>

                                                    <p className="text-gray-500 mb-4">
                                                        ❤️ {song.likes} Likes
                                                    </p>

                                                    <button
                                                        onClick={() => playPreview(song.preview)}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded"
                                                    >
                                                        ▶ Play Preview
                                                    </button>

                                                    <div className="mt-6 p-4 bg-white rounded border">

                                                        <h3 className="font-semibold mb-2">
                                                            Review
                                                        </h3>

                                                        <p className="text-gray-700">
                                                            {song.review}
                                                        </p>

                                                    </div>

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