import { Fragment, useState, useRef } from "react";
import * as Tone from "tone";

import CoverCard from "./CoverCard";

const SongsTable = ({ songs }) => {

    const [expandedRow, setExpandedRow] = useState(null);
    const [playingRow, setPlayingRow] = useState(null);
    const synthRef = useRef(null);

    const playPreview = async (
        preview,
        songId
    ) => {

        await Tone.start();

        if (!synthRef.current) {

            synthRef.current =
                new Tone.Synth().toDestination();

        }

        setPlayingRow(songId);

        const now = Tone.now();
        const noteDuration = 60 / preview.tempo;

        preview.notes.forEach((note, index) => {

            synthRef.current.triggerAttackRelease(
                note,
                "8n",
                now + index * noteDuration
            );

        });

        const duration =
            preview.notes.length *
            noteDuration *
            1000;

        setTimeout(() => {

            setPlayingRow(null);

        }, duration);

    };

    const stopPreview = () => {

        if (synthRef.current) {

            synthRef.current.dispose();
            synthRef.current = null;

        }

        setPlayingRow(null);

    };

    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full">
                <thead>
                    <tr className="bg-linear-to-r from-gray-50 to-blue-50/50 border-b-2 border-gray-200">
                        <th className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            #
                        </th>
                        <th className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            Song
                        </th>
                        <th className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            Artist
                        </th>
                        <th className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            Album
                        </th>
                        <th className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            Genre
                        </th>
                        <th className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            Likes
                        </th>
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
                                className={`border-t border-gray-100 hover:bg-blue-50/30 cursor-pointer transition-all duration-200 ${expandedRow === song.index ? "bg-blue-50/20" : ""
                                    }`}
                            >
                                <td className="p-4 text-sm font-medium text-gray-500">
                                    {song.index}
                                </td>
                                <td className="p-4 text-sm font-medium text-gray-800">
                                    {song.title}
                                </td>
                                <td className="p-4 text-sm text-gray-600">
                                    {song.artist}
                                </td>
                                <td className="p-4 text-sm text-gray-600">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${song.album === "Single"
                                            ? "bg-purple-100 text-purple-700"
                                            : "bg-blue-100 text-blue-700"
                                        }`}>
                                        {song.album}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-gray-600">
                                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                                        {song.genre}
                                    </span>
                                </td>
                                <td className="p-4 text-sm">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold">
                                        ❤️ {song.likes}
                                    </span>
                                </td>
                            </tr>

                            {
                                expandedRow === song.index && (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="p-6 bg-linear-to-br from-blue-50/50 to-indigo-50/30"
                                        >
                                            <div className="flex flex-col md:flex-row gap-6">
                                                <div className="w-48 shrink-0">
                                                    <CoverCard
                                                        song={song}
                                                    />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h2 className="text-2xl font-bold text-gray-800">
                                                                {song.title}
                                                            </h2>
                                                            <p className="text-lg text-gray-600 mt-1">
                                                                {song.artist}
                                                            </p>
                                                        </div>
                                                        <span className="text-sm text-gray-400">
                                                            #{song.index}
                                                        </span>
                                                    </div>

                                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                                        <div className="p-3 bg-white rounded-lg shadow-sm">
                                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Album</p>
                                                            <p className="text-sm font-medium text-gray-700">{song.album}</p>
                                                        </div>
                                                        <div className="p-3 bg-white rounded-lg shadow-sm">
                                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Genre</p>
                                                            <p className="text-sm font-medium text-gray-700">{song.genre}</p>
                                                        </div>
                                                        <div className="p-3 bg-white rounded-lg shadow-sm col-span-2">
                                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Likes</p>
                                                            <p className="text-sm font-medium text-gray-700">❤️ {song.likes}</p>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        {
                                                            playingRow === song.id ? (
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        stopPreview();
                                                                    }}
                                                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow font-medium"
                                                                >
                                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                                                                    </svg>
                                                                    Stop
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        playPreview(
                                                                            song.preview,
                                                                            song.id
                                                                        );
                                                                    }}
                                                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg font-medium transform hover:scale-[1.02]"
                                                                >
                                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                                    </svg>
                                                                    Play Preview
                                                                </button>
                                                            )
                                                        }
                                                    </div>

                                                    <div className="mt-6 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                                                        <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            Review
                                                        </h3>
                                                        <p className="text-gray-700 leading-relaxed">
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