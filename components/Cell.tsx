
import React from 'react';
import { TETROMINOS } from '../gameHelpers';

interface CellProps {
    type: string | number;
}

const Cell: React.FC<CellProps> = ({ type }) => {
    const color = typeof type === 'string' ? TETROMINOS[type].color : 'bg-gray-800/80';
    const borderClass = type === 0 ? '' : 'border-t-white/20 border-l-white/20 border-b-black/20 border-r-black/20';

    return (
        <div 
            className={`aspect-square ${color} ${borderClass} border-2`} 
        />
    );
};

export default React.memo(Cell);
