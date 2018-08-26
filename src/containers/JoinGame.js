import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { joinGame } from '../actions/menu';

const JoinGame = props => {
  const { peopleWaiting, joinGame, username, isInQueue } = props;
  console.log(peopleWaiting);
  return (
    <div>
      <div className="row">
        <div className="col-10 col-lg-7 mx-auto">
          <h1 className="text-center">Hello {username}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-lg-6 mx-auto">
          <Button
            color={isInQueue ? 'success' : 'primary'}
            className={classNames({ disabled: isInQueue })}
            size="lg"
            block
            onClick={() => joinGame()}>
            {isInQueue ? 'Waiting for someone to join' : 'Join a game'}
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-lg-6 mx-auto">
          <h4 className="text-center">
            Number of people standing in queue: <Badge color="secondary">{peopleWaiting}</Badge>
          </h4>
        </div>
      </div>
    </div>
  );
};

JoinGame.propTypes = {
  peopleWaiting: PropTypes.number,
  joinGame: PropTypes.func,
  username: PropTypes.string,
  isInQueue: PropTypes.bool
};

const mapStateToProps = ({ menu, login }) => ({
  peopleWaiting: menu.peopleWaiting,
  username: login.username,
  isInQueue: menu.isInQueue
});

const mapDispatchToProps = dispatch => ({
  joinGame: () => dispatch(joinGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame);
