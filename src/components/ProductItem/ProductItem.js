import React from "react";

function ProductItem({ stt, name, id, price, status }) {
  return (
    <tr>
      <td>{stt + 1}</td>
      <td>{name}</td>
      <td>{id}</td>
      <td>{price}$</td>
      <td>
        <span className={`badge ${status ? "badge-success" : "badge-danger"}`}>
          {status ? "Còn hàng" : "Hết hàng"}
        </span>
      </td>
      <td>
        <button type="button" className="btn btn-warning">
          Sửa
        </button>{" "}
        <button type="button" className="btn btn-danger">
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
