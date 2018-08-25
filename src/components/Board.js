import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

class Board extends Component {
  static lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  static X = 'X';

  static O = 'O';

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      isWon: false
    };
  }

  handleClick(i) {
    const { squares, xIsNext, isWon } = this.state;
    if (isWon) return;
    const { onNextPlayerChange, onWin } = this.props;
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? Board.X : Board.O;
    this.setState({ squares: newSquares, xIsNext: !xIsNext }, () => {
      const winner = this.calculateWinner();
      if (winner) {
        this.setState({ isWon: true });
        onWin(winner);
      } else {
        onNextPlayerChange(xIsNext ? Board.O : Board.X);
      }
    });
  }

  calculateWinner() {
    const { squares } = this.state;
    for (let i = 0; i < Board.lines.length; i += 1) {
      const [a, b, c] = Board.lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) return squares[a];
    }
    return null;
  }

  render() {
    const { squares } = this.state;

    return (
      <div className="board">
        <div className="content">
          {squares.map((n, i) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <Square key={i + squares[i]} value={squares[i]} onClick={() => this.handleClick(i)} />
          ))}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  onNextPlayerChange: PropTypes.func,
  onWin: PropTypes.func
};

export default Board;
