import React from "react";

function ProductItem() {
  return (
    <tr>
      <td>1</td>
      <td>Iphone</td>
      <td>1</td>
      <td>500$</td>
      <td>
        <span className="badge badge-success">Còn hàng</span>
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
