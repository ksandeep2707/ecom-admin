import { Visibility } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import {useState,useEffect} from 'react'
import { userRequest } from '../requestMethods';

const Container=styled.div`
flex:1;
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
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
const ListItem=styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`;

const Img=styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

const User=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const UserName=styled.div`
    font-size: 20px;
    font-weight: 600;
`;

const UserTitle=styled.div`
  font-weight: 300;
  font-size: 17px;
`;
const Button=styled.button`
   display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
    font-size: 17px;
`;

const Logoicon=
{
    fontSize:"30px",
    marginRight:"10px",
    textAlign: "center"
}

export default function WidgetSm() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {

        const res = await userRequest.get("users/?new=true");
        if(users.length==0)
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, [users]);

  return (
    <Container>
        <Title>
            New join Members
        </Title>
        <List>
        {users.map((user) => (
            <ListItem>
                <Img src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }/>
                <User>
                <UserName>{user.username}</UserName>
                <UserTitle>SWE</UserTitle>
                </User>
                <Button>
                  <Visibility style={Logoicon}/>
                    Display
                </Button>
            </ListItem>
            ))}
            
        </List>
    </Container>
  )
}
