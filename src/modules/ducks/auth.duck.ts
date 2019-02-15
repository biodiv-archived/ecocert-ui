import { navigate } from "gatsby";

export const AUTHENTICATE = "authenticate";
export const DEAUTHENTICATE = "deauthenticate";

export const authenticate = ({ username, password }, type) => {
  if (username === "t@t" && password === "t") {
    return dispatch => {
      navigate("/A");
      dispatch({ type: AUTHENTICATE, payload: "dummyjwttoken" });
    };
  }
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: null });
  };
};

export const reauthenticate = token => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

export const deauthenticate = () => {
  return dispatch => {
    dispatch({ type: DEAUTHENTICATE });
  };
};

const initialState = {
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { token: action.payload };
    case DEAUTHENTICATE:
      return { token: null };
    default:
      return state;
  }
};
