// 3 requirements for a <PrivateRoute />
// 1. Has to have the same API as <Route />
// 2. Has to render a <Route />, pass in all the props from <PrivateRoute />
// 3. Redirect to "/login" if the user is not authed, otherwise, display the component

import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, errorStatusCode, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token", "userId") && errorStatusCode !== 403 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ token, errorStatusCode }) => ({
  errorStatusCode
});

// const mapStateToProps = state => {
//   return {
//     errorStatusCode: state.errorStatusCode
//     token: state.token
//   };
// };

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);
