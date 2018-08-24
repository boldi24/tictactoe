import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = props => {
  const { component: Component, username, ...rest } = props;
  return <Route {...rest} render={props => (username ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  username: PropTypes.string
};

const mapStateToProps = state => ({
  username: state.login.username
});

export default connect(mapStateToProps)(PrivateRoute);
