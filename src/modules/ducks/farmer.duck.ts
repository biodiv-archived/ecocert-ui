import axios from "axios";
import { navigate } from "gatsby";
import { notify } from "react-notify-toast";

import { HEADERS, REQUEST_TYPE, TOAST_TYPE } from "../core.constants";

const ADD_FARMER = "addFarmer";

export const addFarmer = state => {
  return dispatch => {
    axios({
      url: `${process.env.ENDPOINT}/farmer`,
      method: REQUEST_TYPE.POST,
      headers: HEADERS,
      data: state
    })
      .then(response => {
        notify.show("🎉 Farmer added successfully", TOAST_TYPE.SUCCESS);
        navigate("/collection-center");
        console.info(response);
      })
      .catch(error => {
        notify.show(
          "❌ There was some error while adding farmer",
          TOAST_TYPE.ERROR
        );
        console.error(error);
      });
    dispatch({ type: ADD_FARMER, payload: {} });
  };
};
const initialState = {};

export default (state = initialState, action) => {
  return state;
};
