import { FETCH_PRODUCTS } from "../constants/ActionTypes";

const intialState = [];

const products = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.products];
    default:
      return state;
  }
};

export default products;
