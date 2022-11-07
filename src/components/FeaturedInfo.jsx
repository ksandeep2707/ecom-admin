import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { ListItem } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { userRequest } from '../requestMethods';

const Container=styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 50px 0px;
`;

const Item=styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: -2px -1px 29px 1px #11d6ac;
-moz-box-shadow: -2px -1px 29px 1px #11d6ac;
box-shadow: -2px -1px 29px 1px #11d6ac;
`;

const ItemTitle=styled.span`
font-size: 30px;
color:rgb(116, 97, 97);
font-weight: bold;
`;

const MoneyContainer=styled.div`
      margin: 10px 0px;
      display: flex;
      align-items: center;
`;

const Money=styled.span`
      font-size: 35px;
      font-weight: 600;
`;

const MoneyRate=styled.span`
      display: flex;
      align-items: center;
      margin-left: 20px;
      font-size: 20px;
`;

const Desc=styled.span`
 font-size: 20px;
color:rgb(19, 1, 1);

`;

const Icon=styled.div`
      font-size: 14px;
      margin-left: 5px;
      color:${(props) => props.active=="false"?"red":"green"};
`;

export default function FeaturedInfo() {

  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        res.data.sort(function(a, b) { 
          return a._id - b._id  ;
        });
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

   console.log(income,perc);
  return (
    <Container>
      <Item>
        <ItemTitle>
               Revenue
        </ItemTitle>
        <MoneyContainer>
            <Money>
              ₹{income[1]?.total}
            </Money>
            <MoneyRate>
             {Math.floor(perc)}{"% "}

            {perc < 0 ? (
              <Icon active="false">
              <ArrowDownward  />
              </Icon>
            ) : (
              <Icon active="true">
              <ArrowUpward />
              </Icon>
            )}
            </MoneyRate>
        </MoneyContainer>
        <Desc>
            Compare to last Month
        </Desc>
      </Item>
      <Item>
        <ItemTitle>
               Sales
        </ItemTitle>
        <MoneyContainer>
            <Money>
              ₹3450
            </Money>
            <MoneyRate>
                -2.4
                <Icon active="false">
                <ArrowDownward />
                </Icon>
            </MoneyRate>
        </MoneyContainer>
        <Desc>
            Compare to last Month
        </Desc>
      </Item>
      <Item>
        <ItemTitle>
               Cost
        </ItemTitle>
        <MoneyContainer>
            <Money>
              ₹2505
            </Money>
            <MoneyRate>
                +2.4
                <Icon active="true">
                <ArrowUpward />
                </Icon>
            </MoneyRate>
        </MoneyContainer>
        <Desc>
            Compare to last Month
        </Desc>
      </Item>
    </Container>
  )
}
