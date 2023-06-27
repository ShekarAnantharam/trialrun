import { React, useState } from "react";
import { Stack } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function TransferList() {
  let [list1, setList1] = useState([
    { value: "one", checked: false },
    { value: "two", checked: false },
    { value: "three", checked: false },
    { value: "four", checked: false },
    { value: "five", checked: false },
  ]);
  let [list2, setList2] = useState([
    { value: "six", checked: false },
    { value: "seven", checked: false },
    { value: "eight", checked: false },
    { value: "nine", checked: false },
    { value: "ten", checked: false },
  ]);

  const [checked, setChecked] = useState([]);
  const [checked2, setChecked2] = useState([]);

  const moveAllToRight = () => {
    let arr=list2.concat(list1)
    setList2(arr)
    setList1([])

  };
  const moveRight = () => {
    let newList = list1.filter((item) => item.checked);
    let arr = list1.filter((item) => !item.checked);
    arr = arr.map((item) => {
      item.checked = false;
      return item;
    });
    newList = newList.map((item) => {
      item.checked = false;
      return item;
    });
    console.log("newlist", newList);
    setList2([...newList, ...list2]);
    setList1(arr);
  };

  const moveLeft = () => {
    let newList = list2.filter((item) => item.checked);
    let arr = list2.filter((item) => !item.checked);
    arr = arr.map((item) => {
      item.checked = false;
      return item;
    });
    newList = newList.map((item) => {
      item.checked = false;
      return item;
    });
    console.log("newlist", newList);
    setList1([...list1, ...newList]);
    setList2(arr);
  };
  const moveAllToLeft = () => {
    let arr=list1.concat(list2)
    setList1(arr)
    setList2([])

  };
  const handleChange = (item) => {
    item.checked = true;
    list1.filter((item, index) => {});
    console.log("clicked item", item);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid",
        margin: "0 100px",
        height: "400px",

      }}
    >
      <div
        style={{
          // border: "1px solid",
          width: "40%",
          // border: "1px solid",
          display: "inline",
          display:"flex",
          flexDirection:"column",
          alignContent:"space-between"
        }}
      >
        {list1.map((item, index) => {
          return (
            <div className="left-box" style={{display:"flex",flexDirection:"column",alignContent:"space-around",justifyContent:"space-around"}}>
              <div>
              <input
                type="checkbox"
                key={index}
                // value={item.value}
                // checked={item.checked}
                onClick={() => handleChange(item, index)}
              />
              <label>{item.value}</label>
              </div>
             
            </div>
          );
        })}
      </div>

      <div
        style={{
          border: "1px solid",
          width: "10%",
          display: "flex",
          // display: "inline",
          flexDirection: "column",
          justifyContent:"space-around"
        }}
      >
        <div>
          <button onClick={moveAllToRight}>{">>"}</button>
        </div>
        <div>
          <button onClick={moveRight}> {">"}</button>
        </div>

        <div>
          <button onClick={moveLeft}> {"<"}</button>
        </div>
        <div>
          <button onClick={moveAllToLeft}> {"<<"}</button>
        </div>
      </div>
      <div
        style={{
          width: "40%",
          // height: "600px",
        }}
      >
        {list2.map((item, index) => {
          return (
            <div className="right-box">
              <input
                type="checkbox"
                key={index}
                // value={item.value}
                // checked={item.checked}

                onChange={() => handleChange(item, index)}
              />
              <label>{item.value}</label>
            </div>
          );
        })}
        {/* <FormGroup>
        {list2.map((item,index)=>{
            return  <FormControlLabel key={index} control={<Checkbox />} label={item} />
        })}
        </FormGroup> */}
      </div>
    </div>
  );
}

export default TransferList;
