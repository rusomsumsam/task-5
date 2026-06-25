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

    const style = song.index % 4;

    return (
        <div
            className={`relative overflow-hidden w-full h-56 rounded-xl shadow-lg bg-linear-to-br ${gradient} p-4 flex flex-col justify-end text-white`}
        >

            {style === 0 && (
                <>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10" />
                </>
            )}

            {style === 1 && (
                <>
                    <div className="absolute -top-6 -left-6 w-24 h-24 rotate-12 bg-white/10" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 rotate-45 bg-white/10" />
                </>
            )}

            {style === 2 && (
                <>
                    <div className="absolute top-4 left-4 w-32 h-2 bg-white/20" />
                    <div className="absolute top-10 left-4 w-20 h-2 bg-white/20" />
                    <div className="absolute top-16 left-4 w-28 h-2 bg-white/20" />
                </>
            )}

            {style === 3 && (
                <>
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/15 rotate-45" />
                </>
            )}

            <h3 className="relative z-10 font-bold text-lg leading-tight">
                {song.title}
            </h3>

            <p className="relative z-10 text-sm mt-2 opacity-90">
                {song.artist}
            </p>

        </div>
    );
};

export default CoverCard;