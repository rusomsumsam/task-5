const CoverCard = ({ song }) => {

    const gradients = [
        "from-purple-600 to-pink-500",
        "from-blue-600 to-cyan-500",
        "from-green-600 to-emerald-500",
        "from-orange-600 to-red-500",
        "from-indigo-600 to-violet-500"
    ];

    const gradient =
        gradients[song.index % gradients.length];

    return (
        <div
            className={`relative overflow-hidden w-full h-56 rounded-lg bg-linear-to-br ${gradient} p-4 flex flex-col justify-end text-white`}
        >

            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10" />

            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10" />

            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10" />

            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10" />

            <div className="absolute -bottom-6 -right-6 w-20 h-20 rotate-45 bg-white/5" />

            <h3 className="relative z-10 font-bold text-lg leading-tight">
                {song.title}
            </h3>

            <p className="relative z-10 text-sm mt-2">
                {song.artist}
            </p>

        </div>
    );
};

export default CoverCard;