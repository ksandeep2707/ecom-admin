import React, {useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/apiCalls.js";
import styled from "styled-components";


const Button=styled.div`
   width:300px;
   font-size:23px;
    padding: 10px 15px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 50px;
    cursor: pointer;
    background-color:teal;
    color:White;
    margin: 40px 40px,
`;

export default function UploadButton({inputs,cat,file})
{
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState("Upload Product");
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        if(!file)
            {
                return "";
            }
        const fileName = new Date().getTime() + file?.name;

        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + Math.floor(progress) + "% done");
            setState("Upload is " + Math.floor(progress) + "% done")
            if(snapshot.bytesTransferred!=snapshot.totalBytes){
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                setState("Upload is paused")
                break;
              case "running":
                setState("Upload is running")
                console.log("Upload is running");
                break;
              default:

            }
        }
          },
          (error) => {
            setLoading(false);
            setState("Upload Product")
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                 console.log(downloadURL);
              const product = { ...inputs, img: downloadURL, ...cat };
              console.log(product);
              addProduct(product, dispatch);
              setState("Upload Product")
              setLoading(false);
            });
          }
        );
      };



  const fetchData = (e) => {
  setLoading(true);

    //Faking API call here
   handleClick(e);

  };


    return (
      <>
        <Button  onClick={fetchData} disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          <span>{state}</span>
        </Button>
      </>
    );
  
}
