import React from "react";
// import "./Answer.css";
// import useEffect
import axios from "axios";
import { useEffect, useState } from "react";
export default function Answer() {
  const [imgList, setImgList] = useState([]);
  const [imgUrl, setImgUrl] = useState(0);
  const [backIndex,setBackIndex]=useState(0);
  const [CurrentIndex,setCurrentIndex]=useState(0)
  const [disabledButton,setDisabledButton]=useState(false)

  const handleApiCall = (url) => {
    if (CurrentIndex>=imgUrl){
      setImgUrl((prev) => {
        setImgUrl(prev + 1);
      });
    }
    // setImgUrl(url)
   
    setCurrentIndex(prev=>setCurrentIndex(prev+1));
  };
  const handleBack=(CurrentIndex)=>{

    // setBackIndex(CurrentIndex-1)
    
    setCurrentIndex(prev=>setCurrentIndex(prev-1));
    if(CurrentIndex<=0){setDisabledButton(true);setCurrentIndex(0)}
  }
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((img) => {
      setImgList([...imgList, img.data.message]);
      // setImgUrl(0);
   
      
    });
  }, [imgUrl]);
 console.log(setImgList)
  return (
    <div
      className="main-div"
      // style={{
      //   display: "flex",
      //  justifyContent:"spaceBetween"
      //   // flex-direction: row;
      //   // align-items: center;
      //   // padding: 8px;
      // }}
    >
      <button onClick={handleBack}>Back</button>
      <img
        src={imgList[CurrentIndex]}
        alt="Current Image"
        style={{ height: 100, width: 100, objectFit: "contain" }}
      />
      {/* {imgList.map((item,index)=>{
        return <>
        <img src={item}/>
        </>
      })} */}
      <button onClick={handleApiCall} disabled={disabledButton}>Next</button>
    </div>
  );
}
