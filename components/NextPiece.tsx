
import React from 'react';
import Cell from './Cell';
import { TETROMINOS } from '../gameHelpers';

interface NextPieceProps {
  tetromino: (string | number)[][];
}

const NextPiece: React.FC<NextPieceProps> = ({ tetromino }) => {
  const style = {
    gridTemplateRows: `repeat(${tetromino.length}, 1fr)`,
    gridTemplateColumns: `repeat(${tetromino[0].length}, 1fr)`,
  };

  return (
     <div className="w-full bg-gray-800/50 p-3 rounded-lg border border-gray-700 text-center mb-4">
        <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Next</h3>
        <div className="flex justify-center items-center h-24">
            <div className="grid gap-px" style={style}>
            {tetromino.map((row, y) =>
                row.map((cell, x) => <Cell key={`${y}-${x}`} type={cell} />)
            )}
            </div>
        </div>
    </div>
  );
};

export default React.memo(NextPiece);
