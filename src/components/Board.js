import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = props => {
  const { squares, onClick } = props;

  return (
    <div className="board">
      <div className="content">
        {squares.map((n, i) => (
          /* eslint-disable-next-line react/no-array-index-key */
          <Square key={i + squares[i]} value={squares[i]} onClick={() => onClick(i)} />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  onClick: PropTypes.func,
  squares: PropTypes.arrayOf(PropTypes.string)
};

export default Board;
