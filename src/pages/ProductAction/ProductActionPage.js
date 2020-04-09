import React, { useState } from "react";
import { connect } from "react-redux";
import { addProductRequest } from "../../actions";

function ProductActionPage({ submitForm }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="status"
          checked={status}
          onChange={() => setStatus(!status)}
        />
        <label className="form-check-label" htmlFor="status">
          Còn hàng
        </label>
      </div>
      <button
        className="btn btn-primary mt-2"
        onClick={() =>
          submitForm({
            name: name,
            price: price,
            status: status,
          })
        }
      >
        Submit
      </button>
    </div>
  );
}

const mapDispathToProps = (dispatch) => ({
  submitForm: (product) => dispatch(addProductRequest(product)),
});

export default connect(null, mapDispathToProps)(ProductActionPage);
