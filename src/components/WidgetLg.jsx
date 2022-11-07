import React from 'react'
import styled from 'styled-components';
import TimeAgo from 'timeago-react';
import { useState,useEffect } from 'react';
import { userRequest } from '../requestMethods';


const Container=styled.div`
flex:2;
border-radius: 10px;
 padding: 20px;
 margin: 20px 20px;
 -webkit-box-shadow: -2px -1px 29px 1px #11d6ac;
-moz-box-shadow: -2px -1px 29px 1px #11d6ac;
box-shadow: -2px -1px 29px 1px #11d6ac;
`;

const Title=styled.div`
 font-size: 30px;
color: rgb(116, 97, 97);
font-weight: 600;
`;

const Table=styled.table`
width: 100%;
  border-spacing: 20px;
`;

const Tr=styled.tr`
`;

const Th=styled.th`
 text-align: left;
 font-size: 23px;
`;

const Td=styled.td`
 font-weight: 300;
 font-size: 18px;
`;

const Img=styled.img`
 width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const User=styled.span`
display :flex;
align-items: center;
`;
const UserName=styled.span`
`;

const Button =styled.button`
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: ${(props) => props.type=="succeeded"?"#8fe8c7":(props.type=="cancelled"?"#f3bebe":"#d3d3f9")};;
    color:  ${(props) => props.type=="succeeded"?"#078557":(props.type=="cancelled"?"red":"blue")};
    cursor: pointer;
    font-size: 17px;

`;


export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/?new=true");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  return (
    <Container>
    <Title>Latest Transactions</Title>
    <Table>
      <Tr>
        <Th>Customer</Th>
        <Th>Date</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Tr>
        {orders.map((order) => (
      <Tr key={order._id}>
        <Td>
        <User>
          <Img src={
                order.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }/>
          <UserName>{order.userId}</UserName>
          </User>
        </Td>
        <Td>
           <TimeAgo datetime={order.createdAt}/>
        </Td>
        <Td>₹{order.amount}</Td>
        <Td><Button type={order.status}>{order.status}</Button></Td>       
      </Tr>
      ))}
      
    </Table>
    </Container>
  )
}
