import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadButton from '../components/UploadButton.jsx';


const Container=styled.div`
flex:4;
`;
const Title=styled.h2`
font-size:40px;
margin: 40px 40px;
`;
const Form=styled.form`
margin-top: 10px; 
margin: 40px 40px;
`;

const Bottom=styled.div`
margin-top: 10px; 
margin: 40px 40px;
text-align: center;
`;

const Top=styled.div`
margin-top: 10px; 
margin: 40px 40px;
display:flex;
flex-wrap: wrap;
`;


const Item=styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;


const Label=styled.label`
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 500;
  color: rgb(121, 118, 118);
`;

const Input=styled.input`
padding:10px;
font-size: 20px;
`;

const ImgInput=styled.input`
padding:10px;
font-size: 20px;
`;
const Select=styled.select`
padding: 10px;
font-size: 20px;
color: rgb(121, 118, 118);
`;

const Option=styled.option` 
font-size: 20px;
color: rgb(121, 118, 118);
`;



const CreateButton=styled.button`

    font-size:23px;
    padding: 10px 15px;
    font-weight: 600;
    border-radius: 10px,
    margin-top: 50px,
    cursor: pointer,
   
    margin: 40px 40px,
`;



export default function NewProduct() 
{
 
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);
  const handleCat = (e) => {
    setCat((prev) => {
      return { ...prev, [e.target.name]: e.target.value.split(",") };
    });
  };

 console.log(cat,file)

 

  return (
    <Container>
        <Title>New Product</Title>
        <Form>
           <Top>
           <Item>
             <Label>Image</Label>
             <ImgInput name="img" type="file" id="file"  onChange={(e) => setFile(e.target.files[0])}/>
           </Item>
           <Item>
             <Label>Title</Label>
             <Input name="title" type="text"  placeholder="Apple Airpods..."  onChange={handleChange}/>
           </Item>
           <Item>
             <Label>Description</Label>
             <Input name="desc" type="text"  placeholder="Description..." onChange={handleChange}/>
           </Item>
           <Item>
             <Label>Price</Label>
             <Input name="price" type="number"  placeholder="Price..." onChange={handleChange}/>
           </Item>
           <Item>
             <Label>Categories</Label>
             <Input name="categories" type="text"  placeholder="Mens,Womens..." onChange={handleCat}/>
           </Item>
           <Item>
             <Label>Available Sizes</Label>
             <Input name="size" type="text"  placeholder="X,L,S,XL..." onChange={handleCat}/>
           </Item>
           <Item>
             <Label>Available Colors</Label>
             <Input name="color" type="text"  placeholder="BLack,White,..." onChange={handleCat}/>
           </Item>
           <Item>
            <Label>InStocks</Label>
            <Select name="inStocks" id="active" onChange={handleChange}>
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
            </Select>
           </Item>
           </Top>
           <Bottom>
              <UploadButton inputs={inputs} cat={cat} file={file}/>
           </Bottom>

        </Form>
    </Container>
  )
}
