import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../actions";
import "../src/../style.css";

class Users extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <h1>Current Users</h1>

        {this.props.users.map(u => (
          <div key={u.id} className="UserCard">
            <div className="ui cards">
              <div className="ui card">
                <div className="content">
                  <div className="header">{u.username}</div>
                  <div className="meta">User</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error
});

export default withRouter(
  connect(
    mapStateToProps,
    { getUser }
  )(Users)
);
