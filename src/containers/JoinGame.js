import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { joinGame } from '../actions/menu';

const JoinGame = props => {
  const { peopleWaiting, joinGame } = props;
  return (
    <div>
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
    </div>
  );
};

JoinGame.propTypes = {
  peopleWaiting: PropTypes.number,
  joinGame: PropTypes.func
};

const mapStateToProps = ({ menu }) => ({
  peopleWaiting: menu.peopleWaiting
});

const mapDispatchToProps = dispatch => ({
  joinGame: () => dispatch(joinGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame);
