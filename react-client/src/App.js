import React, { Fragment, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import PrivateRouter from "./components/PrivateRouter";

import "./style.css";

class App extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="App container fluid">
        <nav className="menu">
          <ul>
            {localStorage.getItem("token") ? (
              <>
                <button
                  className="ui secondary button"
                  onClick={this.logout}
                  to="/"
                >
                  Logout
                </button>
              </>
            ) : (
              <Fragment>
                <NavLink activeClassName="active" to="/">
                  Login
                </NavLink>
                <NavLink activeClassName="active" to="/register">
                  Register
                </NavLink>
              </Fragment>
            )}
          </ul>
        </nav>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRouter exact path="/users" component={Users} />
      </div>
    );
  }
}

export default withRouter(App);
