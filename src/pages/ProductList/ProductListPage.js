import React from "react";
import { Link } from "react-router-dom";

import ProductList from "../../containers/ProductList/ProductList";

function ProductListPage() {
  return (
    <div className="container">
      <Link to="/product/add">
        <button type="button" className="btn btn-primary my-3">
          Thêm sản phẩm
        </button>
      </Link>
      <ProductList />
    </div>
  );
}

export default ProductListPage;
