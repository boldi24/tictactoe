import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { logIn } from '../actions/login';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const { logIn } = this.props;
    if (name.length === 0) alert('Enter username');
    logIn(name);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name } = this.state;
    const { location, username } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };

    if (username) {
      return <Redirect to={from} push />;
    }

    return (
      <div className="row">
        <div className="mx-auto col-12 col-md-4">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Log in</Button>
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
  username: PropTypes.string,
  location: PropTypes.PropTypes.shape({
    pathname: PropTypes.string
  })
};

const mapDispatchToProps = dispatch => ({
  logIn: username => {
    dispatch(logIn(username));
  }
});

const mapStateToProps = state => ({
  username: state.login.username
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
