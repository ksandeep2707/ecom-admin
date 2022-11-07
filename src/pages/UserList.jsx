import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { userRows } from "../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DeleteOutline } from '@mui/icons-material';

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
    background-color: ${(props) => props.type=="active"?"#8fe8c7":"#f3bebe"};;
    color:  ${(props) => props.type=="active"?"#078557":"red"};
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

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };


    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <UserListUser>
                <Img  src={params.row.avatar} alt="" />
                <UserName>{params.row.username}</UserName>
              </UserListUser>
            );
          },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
          renderCell: (params) => {
            return (
                  <Status type={params.row.status}>{params.row.status}</Status>
            );
          },
        },
        {
          field: "transaction",
          headerName: "Transaction Volume",
          width: 200,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/user/" + params.row.id}>
                  <UserListEdit>Edit</UserListEdit>
                </Link>
                <DeleteOutline
                  style={Logoicon}
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
    

  return (
    <Container>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={14}
        checkboxSelection
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
