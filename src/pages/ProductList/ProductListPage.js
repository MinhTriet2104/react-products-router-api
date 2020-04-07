import React from "react";

import ProductList from "../../components/ProductList/ProductList";

function ProductListPage() {
  return (
    <div className="container">
      <button type="button" className="btn btn-primary my-3">
        Thêm sản phẩm
      </button>
      <ProductList />
    </div>
  );
}

export default ProductListPage;
