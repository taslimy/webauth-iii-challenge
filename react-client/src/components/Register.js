import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/";
import Loader from "react-loader-spinner";

import "../App.css";

class RegisterPage extends Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      newCredentials: {
        ...this.state.newCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.newCredentials).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="login-form">
        <form className="ui form" onSubmit={this.register}>
          <h2>Registration Form</h2>
          <div className="ui visible message">
            Create a Username and Password!
          </div>
          <div className="field">
            <label>Username</label>
            <input
              className="registerInput"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.newCredentials.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              className="registerInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.newCredentials.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button">
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ isRegistering, error }) => ({
  isRegistering,
  error
});

export default connect(
  mapStateToProps,
  { register }
)(RegisterPage);
