import React, { useState } from "react";
import "./productList.css";
import { productRows } from "../../userDummyData";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product Name",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" 
            src={params.row.img} 
            alt="user" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },
    {
      field: "status",
      headerName: "Status",

      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,

      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
