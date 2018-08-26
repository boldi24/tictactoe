import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Board from '../components/Board';
import { step } from '../actions/game';

const Game = props => {
  const { squares, winner, xIsNext, step, isX } = props;
  if (!squares) return <div>Loading...</div>;
  return (
    <div>
      <div className="row">
        <div className="m-auto">
          <h1>Welcome to the Tic-Tac-Toe game</h1>
        </div>
      </div>
      <div className="row">
        <div className="m-auto col-10 col-sm-3">
          <Board onClick={step} squares={squares} />
        </div>
      </div>
      <div className="row">
        <div className="m-auto">
          {!winner && <h2>Next Player: {xIsNext === isX ? 'You' : 'Opponent'}</h2>}
          {winner && <h2>Winner: {winner}</h2>}
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  winner: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  step: PropTypes.func,
  isX: PropTypes.bool
};

const mapStateToProps = ({ game }) => ({
  ...game
});

const mapDispatchToProps = dispatch => ({
  step: where => dispatch(step(where))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
