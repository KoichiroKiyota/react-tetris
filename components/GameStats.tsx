
import React from 'react';

interface GameStatsProps {
    score: number;
    rows: number;
    level: number;
}

const StatBox: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="w-full bg-gray-800/50 p-3 rounded-lg border border-gray-700 text-center">
        <div className="text-sm font-bold text-indigo-400 uppercase tracking-wider">{label}</div>
        <div className="text-2xl font-bold text-white">{value}</div>
    </div>
);

const GameStats: React.FC<GameStatsProps> = ({ score, rows, level }) => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <StatBox label="Score" value={score} />
            <StatBox label="Lines" value={rows} />
            <StatBox label="Level" value={level} />
        </div>
    );
};

export default React.memo(GameStats);
