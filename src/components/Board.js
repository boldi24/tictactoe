import React from 'react';
import Sqaure from './Sqaure';

const Board = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="board">
      <div className="content">
        {nums.map( n =>
          <Sqaure key={n} value={n} />)
        }
      </div>
    </div>
  );
};

export default Board;
