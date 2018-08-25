import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';

const JoinGame = props => {
  const { peopleWaiting } = props;
  return (
    <div>
      <Button color="primary" size="lg" block>
        Join a game
      </Button>
      <h4>
        Number of people standing in queue <Badge color="secondary">{peopleWaiting || 'Unknown'}</Badge>
      </h4>
    </div>
  );
};

JoinGame.propTypes = {
  peopleWaiting: PropTypes.number
};

const mapStateToProps = state => ({
  peopleWaiting: state.menu.peopleWaiting
});

export default connect(mapStateToProps)(JoinGame);
