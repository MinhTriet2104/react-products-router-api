const intialState = [
  {
    id: 1,
    name: "Iphone",
    price: 499,
    status: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy s7",
    price: 289,
    status: false,
  },
  {
    id: 3,
    name: "Oppo F1s",
    price: 689,
    status: true,
  },
];

const products = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
