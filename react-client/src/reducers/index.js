import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,

} from "../actions";

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  error: "",
  errorStatusCode: null
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // L O G I N
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        token: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: null,
        loggingIn: false,
        isLoggedIn: false
      };
    // R E G I S T E R
    case REGISTER_START:
      return {
        ...state,
        isLoggedIn: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    default:
      return state;
  }
};

export default reducer;
