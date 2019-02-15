import axios from "axios";
import { navigate } from "gatsby";
import { notify } from "react-notify-toast";

import { IBatching } from "../../interfaces/batching.interface";
import { ENDPOINT, HEADERS, REQUEST_TYPE, TOAST_TYPE } from "../core.constants";

const GET_BATCHING_DATA = "getBatchingData";
const CREATE_BATCH = "createBatch";

export const getBatchingData = reset => {
  return dispatch => {
    axios({
      url: `${ENDPOINT}/collect/all`,
      method: REQUEST_TYPE.GET
    })
      .then(response => {
        dispatch({
          type: GET_BATCHING_DATA,
          payload: { reset, data: transformBatchingData(response.data) }
        });
        // TODO: Show success message and redirect
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: GET_BATCHING_DATA,
          payload: { reset, data: [] }
        });
        // TODO: Show error message
      });
  };
};

export const createBatchfromCollections = collectionsData => {
  return dispatch => {
    axios({
      url: `${ENDPOINT}/batch`,
      method: REQUEST_TYPE.POST,
      headers: HEADERS,
      data: collectionsData
    })
      .then(response => {
        notify.show("🎉 Batch Created Successfully", TOAST_TYPE.SUCCESS);
        navigate("/collection-center/batch");
        console.info(response);
      })
      .catch(error => {
        notify.show(
          "❌ There was some error while creating Batch",
          TOAST_TYPE.ERROR
        );
        navigate("/collection-center/batch");
        console.error(error);
      });
    dispatch({
      type: CREATE_BATCH,
      payload: {}
    });
  };
};

const transformBatchingData = data => {
  return data.map(o => ({
    collectionId: o.collectionId,
    farmer_userId: o.farmer.userId,
    collectionCenter_ccId: o.collectionCenter.ccId,
    quantity: o.quantity,
    moistureContent: o.moistureContent,
    status: o.status
  }));
};

const initialState: IBatching = {
  batchingData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BATCHING_DATA:
      return {
        ...state,
        batchingData: action.payload.reset
          ? action.payload.data
          : [...state.batchingData, ...action.payload.data]
      };
    default:
      return state;
  }
};
