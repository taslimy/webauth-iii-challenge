import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/users"));
  };

  render() {
    return (
      <div className="login-form">
        <form className="ui form" onSubmit={this.login}>
          <h2>Login Form</h2>
          <div className="ui visible message">
            Login with your newly created Credentials.
          </div>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <button className="ui button">
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
