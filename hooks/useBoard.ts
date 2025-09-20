
import { useState, useEffect, useCallback } from 'react';
import { createBoard, BOARD_WIDTH } from '../gameHelpers';

type Player = {
    pos: { x: number; y: number };
    tetromino: (string | number)[][];
    collided: boolean;
};

export const useBoard = (player: Player, resetPlayer: (nextTetromino: string) => void) => {
    const [board, setBoard] = useState(createBoard());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);

        const sweepRows = (newBoard: (string|number)[][][]) =>
            newBoard.reduce((ack, row) => {
                // If the row doesn't contain a '0' (empty cell), it's full
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    // Add a new empty row at the top of the board
                    ack.unshift(new Array(newBoard[0].length).fill([0, 'bg-transparent']));
                    return ack;
                }
                ack.push(row);
                return ack;
            }, [] as (string|number)[][][]);


        const updateBoard = (prevBoard: (string|number)[][][]): (string|number)[][][] => {
            // First flush the board
            const newBoard = prevBoard.map(
                row => row.map(cell => (cell[1] === 'bg-transparent' ? [0, 'bg-transparent'] : cell))
            );

            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newBoard[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'bg-gray-600' : 'bg-transparent'}`,
                        ];
                    }
                });
            });

            // Then check if we collided
            if (player.collided) {
                resetPlayer('next'); // special key to use the already generated next piece
                return sweepRows(newBoard);
            }

            return newBoard;
        };

        setBoard(prev => updateBoard(prev));

    }, [player, resetPlayer]);

    return [board, setBoard, rowsCleared] as const;
};
