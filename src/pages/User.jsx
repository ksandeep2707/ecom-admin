import { CalendarToday, LocationOnOutlined, LocationSearching, MailLockOutlined, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { useState } from "react";
import { Link } from "react-router-dom";

const Container=styled.div`
flex:4;
padding: 20px;
margin: 20px 20px;
`;
const TitleConatiner=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title=styled.h2`
font-size: 40px;
color: rgb(12, 11, 11);
font-weight: 600;
`;

const CreateButton=styled.button`
  border: none;
  padding: 10px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 25px;
  &:hover{
    color:teal;
    background-color: white;
    border:solid 2px;
  }
`;

const UserConatiner=styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserShow=styled.div`
flex:1;
padding: 20px;
border-radius: 5%;
margin-right: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserUpdate=styled.div`
flex:2;
padding: 20px;
border-radius: 5%;
margin-right: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Top=styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const TopImg=styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserShowTopTitle=styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TopUsername=styled.h3`
 font-weight: 600;
 font-size: 30px;
`;

const TopTiltle=styled.div`
 font-weight: 300;
 font-size: 20px;
`;


const Bottom=styled.div`
 margin-top: 20px;
`;

const BottomTitle=styled.div`
  font-size: 23px;
  font-weight: 600;
  color: rgb(118, 115, 115);
  margin-top: 50px;
`;

const BottomInfo=styled.div`
 display: flex;
    align-items: center;
    margin: 20px 10px;
    color: #444;
    font-size: 20px;
`;

const InfoTitle=styled.div`
margin-left: 10px;
`;



const UserUpdateTitle=styled.h2`
    font-size: 35px;
    font-weight: 600;
    margin-top: 20px;
    margin-left:20px;
`;

const UserUpdateLeft=styled.div` 
  flex:1;
   margin-top: 20px;
   margin-left:20px;
   margin-bottom: 20px;
`;

const Form=styled.form` 
  display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const UserUpdateItem=styled.div` 
     display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const Label=styled.label`
    margin-bottom: 5px;
    font-size: 23px; 
`;

const Input=styled.input` 
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
    font-size: 18px;
    margin-bottom: 10px;
   
`;




const UserUpdateRight=styled.div` 
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-between;
`;

const UserUpload=styled.div` 
width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
`;

const UploadImg=styled.img` 
    width: 270px;
    height: 270px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    margin-bottom:30px;
`;
const UploadButton=styled.button` 
    border-radius: 5px;
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: teal;
    color: white;
    font-size: 20px;
    font-weight: 600;
    &:hover{
    color:teal;
    background-color: white;
    border:solid 2px;
  }

`;

const UpdateLabel=styled.label`
   display: flex;
   align-items: center;
   border:solid 2px gray;
   padding: 5px;
   font-size: 20px;
   margin-top: 10px;
   color:black;
   background-color: lightgray;
   border-radius:5px;
`;

const UpdateInput=styled.input` 
 display: none;
`;

export default function User() {

    const [data, setData] = useState("Select Image");

    const handleDelete = (id) => {
        
       let data=document.getElementById(id).files[0].name;
       console.log(id+" "+data);
      setData(data);
    };

  return (
    <Container>
        <TitleConatiner>
           <Title>Edit User</Title>
           <Link to="/ecom-admin/newUser">
           <CreateButton>Create</CreateButton>
           </Link>
        </TitleConatiner>
        <UserConatiner>
             <UserShow>
                 <Top>
                     <TopImg src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""/>

                     <UserShowTopTitle>
                         <TopUsername>Sandeep Kumar</TopUsername>
                         <TopTiltle>Software Engineer</TopTiltle>
                     </UserShowTopTitle>       
                        
                 </Top>
                 <Bottom>
                        <BottomTitle>Account Details</BottomTitle>
                        <BottomInfo>
                            <PermIdentity />
                            <InfoTitle>kksandeep</InfoTitle>
                        </BottomInfo>
                        <BottomInfo>
                            <CalendarToday />
                            <InfoTitle>03.01.2000</InfoTitle>
                        </BottomInfo>
                        <BottomTitle>Contact Details</BottomTitle>
                        <BottomInfo>
                            <PhoneAndroid />
                            <InfoTitle>+91 7788424212</InfoTitle>
                        </BottomInfo>
                        <BottomInfo>
                            <MailLockOutlined />
                            <InfoTitle>ksandeep@gamil.com</InfoTitle>
                        </BottomInfo>
                        <BottomInfo>
                            <LocationOnOutlined />
                            <InfoTitle>Delhi | India</InfoTitle>
                        </BottomInfo>

                 </Bottom>
             </UserShow>

              
             <UserUpdate>
               <UserUpdateTitle>Edit</UserUpdateTitle>
               <Form>
                  <UserUpdateLeft>
                        <UserUpdateItem>
                            <Label>Username</Label>
                            <Input type="text" placeholder="kksandeep" />
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Full Name</Label>
                            <Input type="text" placeholder="Sandeep Kumar" />
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Email</Label>
                            <Input type="email" placeholder="ksandeep@gmail.com" />
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Phone</Label>
                            <Input type="Phone" placeholder="+91 6002497515" />
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Address</Label>
                            <Input type="text" placeholder="Delhi | India" />
                        </UserUpdateItem>
                  </UserUpdateLeft>
                      

                  <UserUpdateRight>
                      <UserUpload>
                          <UploadImg  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""/>
                           <UpdateLabel htmlFor="file" ><Publish style={{borderRight:"solid 2px gray",marginLeft:"5px",marginRight:"5px",paddingRight:"5px",}}/>{data} </UpdateLabel>
                           <UpdateInput type="file" id="file" onChange={() => handleDelete("file")}></UpdateInput>
                     </UserUpload>
                     <UploadButton>Update</UploadButton>
                  </UserUpdateRight>
               </Form>
             </UserUpdate>
        </UserConatiner>

    </Container>
  )
}
