import React, { useEffect } from "react";
import { connect } from "react-redux";

import { requestFetchData } from "../../actions";

import ProductItem from "../../components/ProductItem/ProductItem";

function ProductList({ products, fetchAllProducts }) {
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Mã</th>
          <th>Giá</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, price, status }, index) => (
          <ProductItem
            key={index}
            stt={index}
            id={id}
            name={name}
            price={price}
            status={status}
          />
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: () => dispatch(requestFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
