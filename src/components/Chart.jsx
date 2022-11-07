import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
import styled from 'styled-components';

  const Container=styled.div`

  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: -2px -1px 29px 1px #11d6ac;
  -moz-box-shadow: -2px -1px 29px 1px #11d6ac;
  box-shadow: -2px -1px 29px 1px #11d6ac;
  `;

  const Title=styled.h3`
  font-size: 30px;
  color:rgb(116, 97, 97);
  font-weight: bold;
  `;

export default function Chart({ title, data, dataKey, grid }) {
  return (
     <Container>
        <Title>{title}</Title>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="teal" />
          <Line type="monotone" dataKey={dataKey} stroke="teal" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
     </Container>
  )
}
