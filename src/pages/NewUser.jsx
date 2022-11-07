import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
flex:4;
`;

const Title=styled.h2`
 margin: 20px 20px;
 font-size: 40px;
`;

const Form=styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 20px;
`;

const Item=styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const Label=styled.label`
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 600;
  color: rgb(121, 118, 118);
`;

const Input=styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 20px;
`;

const Radio=styled.div`
 font-size: 20px;
`;

const RadioLabel=styled.label`
  height: 20px;
  padding: 10px;
  margin-top: 15px;
  font-size: 20px;
  color: rgb(121, 118, 118);
`;

const RadioInput=styled.input`
    margin: 10px;
    font-size: 20px;
    color: #555;
`;

const Select=styled.select`
    height: 40px;
    border-radius: 5px;
    font-size: 20px;
    color: rgb(121, 118, 118);
`;

const Option=styled.option`
  font-size: 20px;
  color: rgb(121, 118, 118);
`;

const Buttom=styled.button`
    width: 20%;
    border: none;
    background-color: teal;
    font-size: 23px;
    color: white;
    padding: 10px 15px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
    &:hover{
    color:teal;
    background-color: white;
    border:solid 2px;
  }
`;


export default function NewUser() {
  return (
    <Container>
       <Title>New User</Title>
       <Form>
         <Item>
            <Label>Username</Label>
            <Input type="text" placeholder="kksandeep"/>
         </Item>
         <Item>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Sandeep Kumar"/>
         </Item>
         <Item>
            <Label>Email</Label>
            <Input type="email" placeholder="ksandeep@gmail.com"/>
         </Item>
         <Item>
            <Label>Password</Label>
            <Input type="password" placeholder="Password"/>
         </Item>
         <Item>
            <Label>Phone</Label>
            <Input type="text" placeholder="+91 8846473538"/>
         </Item>
         <Item>
            <Label>Address</Label>
            <Input type="text" placeholder="Delhi | India"/>
         </Item>
         <Item>
            <Label>Gender</Label>
            <Radio>
            <RadioInput type="radio" name="gender" id="male" value="male" />
            <RadioLabel for="male">Male</RadioLabel>
            <RadioInput type="radio" name="gender" id="female" value="female" />
            <RadioLabel for="female">Female</RadioLabel>
            <RadioInput type="radio" name="gender" id="other" value="other" />
            <RadioLabel for="other">Other</RadioLabel>
            </Radio>
         </Item>
         <Item>
            <Label>Active</Label>
            <Select className="newUserSelect" name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
            </Select>
         </Item>
         <Buttom>Create</Buttom>
       </Form>
    </Container>
  )
}
