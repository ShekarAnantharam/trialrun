import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function ExtendedTask() {

const [list,setList]=useState([])

useEffect(()=>{
    // axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setList(res.data))
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setList(data))
    
},[])
console.log("list",list)

  return (
    <div>
        {list.map((item,index)=>{
            
            return <>
            <div>
                {item.name}
                {item.address.geo.lat}
                {item.company.name}
            </div>
            </>
        })}
    </div>
  )
}

export default ExtendedTask