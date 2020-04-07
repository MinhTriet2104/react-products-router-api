import React from "react";

function ProductActionPage() {
  return (
    <div className="container">
      <div className="form-group">
        <label for="name">Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Price"
        />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="status" />
        <label className="form-check-label" for="status">
          Còn hàng
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </div>
  );
}

export default ProductActionPage;
