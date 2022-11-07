import React from 'react'
import styled from 'styled-components';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge } from '@mui/material';

const Container=styled.div`
width: 100vw;
height: 70px;
background-color:white;
position: sticky;
top: 0;
z-index: 999;

`;

const Wrapper=styled.div`
height: 100%;
padding: 0px 20px;
display: flex;
align-items: center;
justify-content: space-between;
background-color:white;

`;

const TopLeft=styled.div`
padding:10px 10px;
width:100%;
`;


 const Logo=styled.div`
 align-items: center;
 display:flex;
 font-size: 40px;
 font-weight:bold;
 `;

const  TopRight=styled.div`
widht:100%;
display flex;
margin:25px;
`;

const Icon=styled.div`
display: flex;
align-items: center;
margin:10px;
cursor: pointer;
`;

const ProfilePic=styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin:40px;
`;


const Logoicon={
    fontSize:"70px",
    color :"teal",
    marginRight:"10px",
    textAlign: "center"
}
const LeftLogoicon={
    fontSize:"40px",
    color :"teal",
    textAlign: "center",
}
export default function () {
  return (
    <Container>
          <Wrapper>
            <TopLeft>
                <Logo>
                    <AdminPanelSettingsIcon style={Logoicon}/>
                    SHOPIFY ADMIN
                </Logo>
            </TopLeft>
            <TopRight>
                <Icon>
                <Badge badgeContent={4} color="success" >
                <NotificationsIcon style={LeftLogoicon}/>
                </Badge>
                </Icon>
                <Icon>
                <LanguageIcon style={LeftLogoicon}/>
                </Icon>
                <Icon>
                <SettingsIcon style={LeftLogoicon}/>
                </Icon>
                <ProfilePic src={require('../img/profile.jpg')}/>

            </TopRight>
          </Wrapper>
    </Container>
  )
}
