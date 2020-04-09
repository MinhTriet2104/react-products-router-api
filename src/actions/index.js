import { FETCH_PRODUCTS, ADD_PRODUCT } from "../constants/ActionTypes";
import axios from "axios";

export const requestFetchData = () => async (dispatch) => {
  const res = await axios.get(
    "https://5e8818e919f5190016fed301.mockapi.io/api/products"
  );
  return dispatch(fetchData(res.data));
};

export const addProductRequest = (product) => async (dispatch) => {
  const res = await axios.post(
    "https://5e8818e919f5190016fed301.mockapi.io/api/products",
    product
  );
  return dispatch(addProduct(res.data));
};

export const fetchData = (products) => ({
  type: FETCH_PRODUCTS,
  products,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});
