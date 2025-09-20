
import React from 'react';
import Cell from './Cell';

interface BoardProps {
    board: (string | number)[][][];
}

const Board: React.FC<BoardProps> = ({ board }) => {
    return (
        <div 
          className="grid gap-px bg-gray-800 border-4 border-gray-700 rounded-lg shadow-inner"
          style={{
              gridTemplateRows: `repeat(${board.length}, 1fr)`,
              gridTemplateColumns: `repeat(${board[0].length}, 1fr)`,
          }}
        >
            {board.map((row) =>
                row.map((cell, x) => <Cell key={x} type={cell[0]} />)
            )}
        </div>
    );
};

export default React.memo(Board);
