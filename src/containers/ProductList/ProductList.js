import React from "react";

import ProductItem from "../../components/ProductItem/ProductItem";

function ProductList() {
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
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </tbody>
    </table>
  );
}

export default ProductList;
