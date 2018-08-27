import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Board from '../components/Board';
import { leaveGame, step } from '../actions/game';

const Game = props => {
  const { squares, winner, xIsNext, step, isX, opponentName, leaveGame, isEnded } = props;
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
          <h2>
            {!isEnded
              ? `Next Player:${xIsNext === isX ? 'You' : opponentName}`
              : winner
                ? `Winner:${winner}`
                : "It's a tie"}
          </h2>
        </div>
      </div>
      {isEnded && (
        <div className="row">
          <div className="col-10 col-lg-6 mx-auto">
            <Button color="primary" size="lg" block onClick={() => leaveGame()}>
              Leave game
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

Game.propTypes = {
  winner: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  step: PropTypes.func,
  isX: PropTypes.bool,
  opponentName: PropTypes.string,
  leaveGame: PropTypes.func,
  isEnded: PropTypes.bool
};

const mapStateToProps = ({ game }) => ({
  ...game
});

const mapDispatchToProps = dispatch => ({
  step: where => dispatch(step(where)),
  leaveGame: () => dispatch(leaveGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
