import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      nextPlayer: 'X',
      winner: null
    };
    this.handleNextPlayerChange = this.handleNextPlayerChange.bind(this);
    this.handleWinner = this.handleWinner.bind(this);
  }

  handleNextPlayerChange(newPlayer) {
    this.setState({ nextPlayer: newPlayer });
  }

  handleWinner(winner) {
    this.setState({ winner });
  }

  render() {
    const { nextPlayer, winner } = this.state;

    return (
      <div>
        <div className="row">
          <div className="m-auto">
            <h1>Welcome to the Tic-Tac-Toe game</h1>
          </div>
        </div>
        <div className="row">
          <div className="m-auto col-10 col-sm-3">
            <Board onNextPlayerChange={this.handleNextPlayerChange} onWin={this.handleWinner} />
          </div>
        </div>
        <div className="row">
          <div className="m-auto">
            {!winner && <h2>Next Player: {nextPlayer}</h2>}
            {winner && <h2>Winner: {winner}</h2>}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
