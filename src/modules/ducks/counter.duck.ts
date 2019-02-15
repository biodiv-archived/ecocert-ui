import { ICounter } from "../../interfaces/counter.interface";

const INCREMENT = "increment";
const DECREMENT = "decrement";

export const increment = (state, type) => {
  return (dispatch, getState) => {
    dispatch({ type: INCREMENT, payload: getState().counter.count + 1 });
  };
};

export const decrement = (state, type) => {
  return (dispatch, getState) => {
    dispatch({ type: DECREMENT, payload: getState().counter.count - 1 });
  };
};

const initialState: ICounter = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return { ...state, count: action.payload };
    case INCREMENT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
