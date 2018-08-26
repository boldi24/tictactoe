import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { joinGame } from '../actions/menu';

const JoinGame = props => {
  const { peopleWaiting, joinGame, username } = props;
  return (
    <div>
      <div className="row">
        <div className="col-10 col-md-5 mx-auto">
          <h1 className="text-center">Hello {username}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-4 mx-auto">
          <Button color="primary" size="lg" block onClick={() => joinGame()}>
            Join a game
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-4 mx-auto">
          <h4>
            Number of people standing in queue <Badge color="secondary">{peopleWaiting || 'Unknown'}</Badge>
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-4 mx-auto">
          <h4>Wait until someone joins...</h4>
        </div>
      </div>
    </div>
  );
};

JoinGame.propTypes = {
  peopleWaiting: PropTypes.number,
  joinGame: PropTypes.func,
  username: PropTypes.string
};

const mapStateToProps = ({ menu, login }) => ({
  peopleWaiting: menu.peopleWaiting,
  username: login.username
});

const mapDispatchToProps = dispatch => ({
  joinGame: () => dispatch(joinGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame);
