import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
import styled from 'styled-components'
import Chart from '../components/Chart';
import {productData} from '../Dummydata';
import { Publish } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";

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

const ProductTop=styled.div`
display: flex;
`;

const ProductTopLeft=styled.div`
flex:1
`;



const ProductTopRight=styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  flex:1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop=styled.div`
margin: 5px 5px;
 display: flex;
  align-items: center;
`;

const ProductImg=styled.img`
 width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductName=styled.h3`
 font-weight: 600;
 font-size: 27px;
 color:#0f0d0d;
`;



const ProductInfoBottom=styled.div`
margin-top: 20px;
`;

const ProductInfoItem=styled.div`
width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  margin-left: 25px;
  font-size: 20px;
`;

const Key=styled.div`
justify-content: space-between;
`;

const Value=styled.div`
font-weight: 300;
`;

const ProductButtom=styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;


const ProductUpdate=styled.div`
flex:2;
padding: 5px;
`;



const ProductUpdateTitle=styled.h2`
    font-size: 35px;
    font-weight: 600;
    margin-top: 5px;
    margin-left:20px;
`;

const ProductUpdateLeft=styled.div` 
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

const ProductUpdateItem=styled.div` 
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




const ProductUpdateRight=styled.div` 
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-between;

`;

const ProductUpload=styled.div` 
width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
`;

const UploadImg=styled.img` 
    width: 270px;
    height: 270px;
    border-radius: 15px;
    object-fit: cover;
    margin-right: 20px;
    margin-bottom:20px;

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
    width:500px;
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
   color:black;
   background-color: lightgray;
   border-radius:5px;
   margin-bottom: 20px;
`;

const UpdateInput=styled.input` 
 display: none;
`;

const Select=styled.select`
width: 250px;
font-size: 18px;
color:gray;
`;

const Option=styled.option`
width: 250px;
font-size: 18px;
margin-bottom: 20px;
`;


export default function Product() 
{
  

    const [data, setData] = useState("Select Image");
    const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

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
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
       // console.log(list);
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

    const handleDelete = (id) => {
        
       let data=document.getElementById(id).files[0].name;
       console.log(id+" "+data);
      setData(data);
    };


   //console.log(product);


  return (
    

    <Container>
        <TitleConatiner>
           <Title>Product</Title>
           <Link to="/newProduct">
           <CreateButton>Create</CreateButton>
           </Link>
        </TitleConatiner>
        <ProductTop>
            <ProductTopLeft>
              <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
            </ProductTopLeft>
            <ProductTopRight>
                <ProductInfoTop>
                    <ProductImg src={product.img} />
                    <ProductName>{product.title}</ProductName>
                </ProductInfoTop>
                <ProductInfoBottom>
                    <ProductInfoItem>
                        <Key>Id: </Key>
                        <Value>{product._id}</Value>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <Key>Sales: </Key>
                        <Value>234</Value>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <Key>In Stocks: </Key>
                        <Value>{product.inStocks? "Yes":"No"}</Value>
                    </ProductInfoItem>
                </ProductInfoBottom>

            </ProductTopRight>
        </ProductTop>
        <ProductButtom>
        <ProductUpdate>
               <ProductUpdateTitle>Product Edit</ProductUpdateTitle>
               <Form>
                  <ProductUpdateLeft>
                        <ProductUpdateItem>
                            <Label>Product Name</Label>
                            <Input type="text" placeholder={product.title} />
                        </ProductUpdateItem>
                        <ProductUpdateItem>
                            <Label>Product Description</Label>
                            <Input type="text" placeholder={product.desc} />
                        </ProductUpdateItem>
                        <ProductUpdateItem>
                            <Label>Price</Label>
                            <Input type="Number" placeholder={product.price} />
                        </ProductUpdateItem>
                        <ProductUpdateItem>
                           <Label>In Stock</Label>
                             <Select className="newUserSelect" name="active" id="active">
                             <Option value="yes">Yes</Option>
                             <Option value="no">No</Option>
                             </Select>
                        </ProductUpdateItem>
                        <ProductUpdateItem>
                        <UploadButton style={{marginTop:"30px"}}>Update</UploadButton>
                        </ProductUpdateItem>
                  </ProductUpdateLeft>
                      

                  <ProductUpdateRight>
                      <ProductUpload>
                          <UploadImg  src={product.img}
                  alt=""/>
                           <UpdateLabel htmlFor="file" ><Publish style={{borderRight:"solid 2px gray",marginLeft:"5px",marginRight:"5px",paddingRight:"5px",}}/>{data} </UpdateLabel>
                           <UpdateInput type="file" id="file" onChange={() => handleDelete("file")}></UpdateInput>
                     </ProductUpload>
                    
                  </ProductUpdateRight>
               </Form>
             </ProductUpdate>
        </ProductButtom>

    </Container>
  )
}
