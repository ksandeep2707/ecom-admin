import React from 'react'
import styled from 'styled-components';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo'
import {userData} from '../Dummydata.js';
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";

const Container=styled.div`
 flex:4;
`;
const HomeWidget=styled.div`
    display: flex;
   margin: 0px 0px;
   overflow: hidden;
`;

export default function Home() {
  
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);
  return (
    <Container>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
        <HomeWidget>
        <WidgetSm/>
        <WidgetLg/>
        </HomeWidget>
    </Container>
  )
}
