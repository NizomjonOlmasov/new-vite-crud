import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
function Update() {
  const {id}=useParams()
  const navigate=useNavigate()
  const [value,setValue]=useState({
    id:id,
    marka:'',
    year:'',
    color:'',
    shina:''
  })
  console.log(value);
  useEffect(()=>{
    axios.get('http://localhost:3000/cars/'+id)
    .then((res)=>{
    setValue({...value,marka:res.data.marka,year:res.data.year,color:res.data.color,shina:res.data.shina})
    })
  },[])
const handlUpdate=(e)=>{
  e.preventDefault()
  axios.put('http://localhost:3000/cars/'+id,value)
  .then((res)=>{
navigate('/')
  })
}
  return (
    <div>
      <div>
        <form onSubmit={handlUpdate} action="" className="container text-center mt-5">
          <div>
            <label className="text-" htmlFor="">
              Marka
            </label>
            <br />
            <input value={value.marka} onChange={(e)=>setValue({...value,marka:e.target.value})}
              type="text"
              placeholder="marka..."
              className=" border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
          </div>
          <br />
          <div>
            <label className="text-" htmlFor="">
              Year
            </label>
            <br />
            <input value={value.year} onChange={(e)=>setValue({...value,year:e.target.value})}
              type="text"
              placeholder="Year..."
              className="border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
          </div>
          <br />
          <div>
            <label className="text-" htmlFor="">
              Color
            </label>
            <br />
            <input value={value.color} onChange={(e)=>setValue({...value,color:e.target.value})}
              placeholder="	Color..."
              className="border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
          </div>
          <br />
          <div>
            <label className="text-" htmlFor="">
              Shina
            </label>
            <br />
            <input value={value.shina} onChange={(e)=>setValue({...value,shina:e.target.value})}
              type="number"
              placeholder="Shina..."
              className="border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
          </div>
          <div className="mt-5">
            <button className="btn btn-success">Qoshish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
