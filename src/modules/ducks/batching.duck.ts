import axios from "axios";
import { navigate } from "gatsby";
import { notify } from "react-notify-toast";

import { IBatching } from "../../interfaces/batching.interface";
import { HEADERS, REQUEST_TYPE, TOAST_TYPE } from "../core.constants";

const GET_COLLECTION_DATA = "getCollectionData";
const CREATE_BATCH = "createBatch";

export const getCollectionData = reset => {
  return dispatch => {
    axios({
      url: `${process.env.ENDPOINT}/collect/all`,
      method: REQUEST_TYPE.GET
    })
      .then(response => {
        dispatch({
          type: GET_COLLECTION_DATA,
          payload: { reset, ...transformCollectionData(response.data) }
        });
        // TODO: Show success message and redirect
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: GET_COLLECTION_DATA,
          payload: { reset, data: [] }
        });
        // TODO: Show error message
      });
  };
};

export const createBatchfromCollections = collectionsData => {
  return dispatch => {
    axios({
      url: `${process.env.ENDPOINT}/batch`,
      method: REQUEST_TYPE.POST,
      headers: HEADERS,
      data: collectionsData
    })
      .then(response => {
        notify.show("✅ Batch Created Successfully", TOAST_TYPE.SUCCESS);
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

const transformCollectionData = data => {
  const nonSelectable: any = [];
  const rows = data
    .map(o => {
      if (o.status !== "COLLECTED") {
        nonSelectable.push(o.collectionId.toString());
      }
      return {
        id: o.collectionId.toString(),
        farmer_userId: o.farmer.userId,
        collectionCenter_ccId: o.collectionCenter.ccId,
        quantity: o.quantity,
        moistureContent: o.moistureContent,
        date: o.date,
        status: o.status,
        batchId: o.batchId
      };
    })
    .reverse();
  return { rows, nonSelectable };
};

const initialState: IBatching = {
  collectionData: [],
  nonSelectable: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTION_DATA:
      return {
        ...state,
        collectionData: action.payload.reset
          ? action.payload.rows
          : [...state.collectionData, ...action.payload.rows],
        nonSelectable: action.payload.reset
          ? action.payload.nonSelectable
          : [...state.nonSelectable, ...action.payload.nonSelectable]
      };
    default:
      return state;
  }
};
