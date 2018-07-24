import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const { squares } = this.state;
    const newSquares = [...squares];
    newSquares[i] = 'X';
    this.setState({squares: newSquares});
  }

  render() {
    const { squares } = this.state;

    return (
      <div className="board">
        <div className="content">
          {squares.map((n, i) => <Square key={i + squares[i]} value={squares[i]} onClick={() => this.handleClick(i)} />)}
        </div>
      </div>
    );
  }
}

export default Board;
