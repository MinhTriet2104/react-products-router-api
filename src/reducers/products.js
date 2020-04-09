import { FETCH_PRODUCTS, ADD_PRODUCT } from "../constants/ActionTypes";

const intialState = [];

const products = (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...state, action.product];
    }
    case FETCH_PRODUCTS:
      return [...action.products];
    default:
      return state;
  }
};

export default products;
