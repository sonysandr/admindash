import { Publish } from "@mui/icons-material";
import React from "react";
import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="productForm">

        <div className="productFormLeft">
        <input type="file" />
          <label>Name</label>
          <input type="text" placeholder="Face Massager" />

          <label>In Stock</label>
        <input type="text" placeholder="123" />

          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="productButton">Update</button>
        </div>
      </form>
    </div>
  );
}
