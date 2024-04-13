import React from 'react'
import { useState } from 'react';
import GetCars from "../components/getCars/getCars";
import PostCars from "../components/getCars/postCars/postCars";
function Home() {
    const [data, setData] = useState([]);
  return (
    <div className="flex flex-col gap-10">
    <div className="flex justify-center items-center text-[30px]">
     <div>
      
      <h1>CRUD Dastur</h1>
      </div>   <div>
      <PostCars setData={setData} />
    </div>
    <div>
      <GetCars setData={setData} data={data} />
    </div> 
      </div>
  

  </div>
  )
}

export default Home