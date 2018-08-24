import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from '../actions/login';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username } = this.state;
    const { logIn } = this.props;
    if (username.length === 0) alert('Enter username');
    logIn(username);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;
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
                value={username}
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
  logIn: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  logIn: username => {
    dispatch(logIn(username));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
