import { navigate } from "gatsby";
import axios from "axios";

import { ENDPOINT, HEADERS, REQUEST_TYPE } from "../core.constants";

const COLLECT_DO = "collect";

export const collect = state => {
  return dispatch => {
    axios({
      url: `${ENDPOINT}/collect`,
      method: REQUEST_TYPE.POST,
      headers: HEADERS,
      data: state
    })
      .then(response => {
        console.info(response);
        navigate("/collection-center");
        // TODO: Show success message and redirect
      })
      .catch(error => {
        console.error(error);
        // TODO: Show error message
      });
    dispatch({ type: COLLECT_DO, payload: {} });
  };
};

const initialState = {};

export default (state = initialState, action) => {
  return state;
};
