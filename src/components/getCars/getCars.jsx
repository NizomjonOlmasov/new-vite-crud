import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
function GetCars({ setData, data }) {
  const [deleteMethod, setDeleteMethod] = useState("");
  console.log(deleteMethod);
  useEffect(() => {
    axios.get("http://localhost:3000/cars").then((response) => {
      setData(response.data);
    });
  }, []);
  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/cars/" + id).then((res) => {
      axios.get("http://localhost:3000/cars").then((res) => {
        setData(res.data);
      });
    });
  };
  return (
    <div>
      <div>
        <table
          className="table
            "
        >
          <tr>
            <th>Marka</th>
            <th>Year</th>
            <th>Color</th>
            <th>Shina</th>
            <th>Qo'shimcha</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.marka}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.shina}</td>
              <td>
                <button className="flex gap-5">
                  <Link to={`/update/${item.id}`}>
                  <FaBeer className=" text-[red] text-[30px]" />
                  </Link>
                </button>
                <button className="flex gap-5">
                  {" "}
                  <FaTrash
                    onClick={() => handleDelete(item.id)}
                    className="text-[#00ff55] text-[30px]"
                  />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default GetCars;
