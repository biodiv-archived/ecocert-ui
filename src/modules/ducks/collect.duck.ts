import axios from "axios";
import { navigate } from "gatsby";
import { notify } from "react-notify-toast";

import { HEADERS, REQUEST_TYPE, TOAST_TYPE } from "../core.constants";

const COLLECT_DO = "collect";

export const collect = state => {
  return dispatch => {
    axios({
      url: `${process.env.ENDPOINT}/collect`,
      method: REQUEST_TYPE.POST,
      headers: HEADERS,
      data: state
    })
      .then(response => {
        console.info(response);
        notify.show("✅ Collection done successfully", TOAST_TYPE.SUCCESS);
        navigate("/collection-center/batch");
        // TODO: Show success message and redirect
      })
      .catch(error => {
        console.error(error);
        notify.show(
          "❌ There was some error while collecting",
          TOAST_TYPE.ERROR
        );
        // TODO: Show error message
      });
    dispatch({ type: COLLECT_DO, payload: {} });
  };
};

const initialState = {};

export default (state = initialState, action) => {
  return state;
};
