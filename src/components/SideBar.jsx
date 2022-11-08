import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useState} from 'react';

import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@mui/icons-material";

const Container=styled.div`
flex:1;
background-color: #f1f9f8;
height: calc(100vh - 90px);
position: sticky;
top: 73px;
`;

const SideBarWapper=styled.div`
padding: 25px;
color: #555;
`;

const SideBarMenu=styled.div`
margin-bottom: 15px;
`;

const Title=styled.h3`
font-size: 24px;
color: rgb(116, 97, 97);
`;

const List=styled.ul`
  list-style: none;
  padding: 10px;
  font-size: 20px;
`;

const ListItem=styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color:${(props) => props.active=="true"&&"#95f3de"};
  &:hover{
    background-color:#95f3de;
  };
`;

const Logoicon=
{
    fontSize:"30px",
    marginRight:"10px",
    textAlign: "center"
}

const LinkStyle={
   textDecoration:"none",
   color:"inherit"
}

export default function SideBar() {

   let initialState=["true","false","false","false","false","false","false","false","false","false","false","false","false"];
   const [data, setData] = useState(initialState);
   const setHover = (idx) => {
      
      let newData=["false","false","false","false","false","false","false","false","false","false","false","false","false"];
      newData[idx]="true";
      setData(newData);
   };    
  return (
    <Container>
        <SideBarWapper>
            <SideBarMenu>
                <Title>
                   DashBoard
                </Title>
                <List >
                <Link to="/ecom-admin/" style={LinkStyle}>
                    <ListItem active={data[0]} onClick={()=>setHover(0)}>
                       <LineStyle style={Logoicon} />
                       Home
                    </ListItem>
                </Link>
                    <ListItem active={data[1]} onClick={()=>setHover(1)}>
                       <Timeline style={Logoicon}/>
                       Analytics
                    </ListItem>
                    <ListItem active={data[2]} onClick={()=>setHover(2)}>
                       <TrendingUp style={Logoicon}/>
                       Sales
                    </ListItem>
                </List>
            </SideBarMenu>
            <SideBarMenu>
                <Title>
                   Quick Menu
                </Title>
                <List>
                   <Link to="/ecom-admin/users" style={LinkStyle}>
                    <ListItem active={data[3]} onClick={()=>setHover(3)}>
                       <PermIdentity style={Logoicon}/>
                       Users
                    </ListItem>
                   </Link>
                   <Link to="/ecom-admin/products" style={LinkStyle}>
                    <ListItem active={data[4]} onClick={()=>setHover(4)}> 
                       <Storefront style={Logoicon}/>
                       Products
                    </ListItem>
                    </Link>
                    <ListItem active={data[5]} onClick={()=>setHover(5)}>
                       <AttachMoney style={Logoicon}/>
                       Transactions
                    </ListItem>
                    <ListItem active={data[6]} onClick={()=>setHover(6)}>
                       <BarChart style={Logoicon}/>
                        Reports
                    </ListItem>
                </List>
            </SideBarMenu>
            <SideBarMenu>
                <Title>
                   Notifications
                </Title>
                <List>
                    <ListItem active={data[7]} onClick={()=>setHover(7)}>
                       <MailOutline style={Logoicon}/>
                       Mail
                    </ListItem>
                    <ListItem active={data[8]} onClick={()=>setHover(8)}>
                       <DynamicFeed style={Logoicon}/>
                       FeedBack
                    </ListItem>
                    <ListItem active={data[9]} onClick={()=>setHover(9)}>
                       <ChatBubbleOutline style={Logoicon}/>
                       Messages
                    </ListItem>
                </List>
            </SideBarMenu>
            <SideBarMenu>
                <Title>
                   Staff
                </Title>
                <List>
                    <ListItem active={data[10]} onClick={()=>setHover(10)}>
                       <WorkOutline style={Logoicon}/>
                       Manage
                    </ListItem>
                    <ListItem active={data[11]} onClick={()=>setHover(11)}>
                       <Timeline style={Logoicon}/>
                       Analytics
                    </ListItem>
                    <ListItem  active={data[12]} onClick={()=>setHover(12)}>
                       <Report style={Logoicon}/>
                       Reports
                    </ListItem>
                </List>
            </SideBarMenu>
        </SideBarWapper>
    </Container>
  )
}
