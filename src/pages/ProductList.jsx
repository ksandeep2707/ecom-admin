import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { productRows } from "../Dummydata";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { DeleteOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from '../redux/apiCalls';

const Container=styled.div`
flex:4;
`;

const UserListUser=styled.div`
  display: flex;
  align-items: center;
`;
const Img=styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const UserName=styled.div`
`;

const UserListEdit=styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
    font-size: 17px;
`;

const Status=styled.button`
align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: ${(props) => props.type=="inStocks"?"#90f0b5":"#f3bebe"};;
    color:  ${(props) => props.type=="inStocks"?"#078557":"red"};
    cursor: pointer;
    font-size: 17px;
`;

const Logoicon=
{
    fontSize:"30px",
    color:"red",
    marginRight:"10px",
    textAlign: "center"
}

export default function ProductList() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  
  console.log(products);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
          field: "user",
          headerName: "User",
          width: 220,
          renderCell: (params) => {
            return (
              <UserListUser>
                <Img  src={params.row.img} alt="" />
                <UserName>{params.row.title}</UserName>
              </UserListUser>
            );
          },
        },
        {
          field: "inStocks",
          headerName: "Stocks",
          width: 160,
          renderCell: (params) => {
            return (
                  <Status type={params.row.inStocks?"inStocks":"outOfStocks"}>{params.row.inStocks?"inStocks":"outOfStocks"}</Status>
            );
          },
        },
        {
          field: "price",
          headerName: "Price",
          width: 200,
          renderCell: (params) => {
            return (
              `₹ ${params.row.price}`
            );
          },
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/ecom-admin/product/" + params.row._id}>
                  <UserListEdit>Edit</UserListEdit>
                </Link>
                <DeleteOutline
                  style={Logoicon}
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];
    

  return (



    <Container>
        <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={14}
        checkboxSelection
        getRowId={(row) => row._id}
        sx={{
      margin:"20px 20px",
    fontSize:"20px",
    '& .MuiDataGrid-cell:hover': {
      color: 'teal',
    },
  }}
      />
    </Container>
  )
}
