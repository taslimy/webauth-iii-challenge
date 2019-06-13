import axios from "axios";


// L O G I N

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_START
  });

  return axios
    .post("http://localhost:5000/api/auth/login", creds, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
       localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.id
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    });
};

// R E G I S T E R

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = cred => dispatch => {
  dispatch({
    type: REGISTER_START
  });
  return axios
    .post("http://localhost:5000/api/auth/register", cred, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("error reging", err);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err
      });
    });
};
