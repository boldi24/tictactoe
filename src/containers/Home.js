import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import JoinGame from './JoinGame';
import Game from './Game';

const Home = props => {
  const { isInGame } = props;
  return (
    <div>
      { isInGame ? <Game /> : <JoinGame /> }
    </div>
  );
};

Home.propTypes = {
  isInGame: PropTypes.bool
};

const mapStateToProps = ({ menu }) => ({
  isInGame: menu.isInGame
});

export default connect(mapStateToProps)(Home);
