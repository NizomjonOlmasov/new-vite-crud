import React, { useState } from "react";
import axios from "axios";
function PostCars({ setData }) {
  const [validateMarka, setValidateMarka] = useState(false);
  const [validateYear, setValidateYear] = useState(false);
  const [validateColor, setValidateColor] = useState(false);
  const [validateShina, setValidateShina] = useState(false);
  const [value, setValue] = useState({
    marka: "",
    year: "",
    color: "",
    shina: "",
  });

  const handlSubmit = (e) => {
    e.preventDefault();
    if (value.marka === "") {
      setValidateMarka(true);
    } else if (value.year === "") {
      setValidateYear(true);
    } else if (value.color === "") {
      setValidateColor(true);
    } else if (value.setValidateShina === "") {
      setValidateShina(true);
    } else {
      axios
        .post("http://localhost:3000/cars", {
          marka: value.marka,
          year: value.year,
          color: value.color,
          shina: value.shina,
        })
        .then((response) => {
          setValue({ marka: "", year: "", color: "", shina: "" });
          axios.get("http://localhost:3000/cars").then((response) => {
            setData(response.data);
          });
        });
    }
  };
  return (
    <div>
      <div>
        <form action="" onSubmit={handlSubmit} className="flex flex-col gap-2">
          <div>
            <label className="text-" htmlFor="">
              Marka
            </label>
            <br />
            <input
              value={value.marka}
              onChange={(e) => setValue({ ...value, marka: e.target.value })}
              type="text"
              placeholder="marka..."
              className="border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
            {validateMarka && <p className="text-[red]">Maydon tolmagan</p>}
          </div>
          <br />
          <div>
            <label className="text-" htmlFor="">
              {" "}
              Year
            </label>
            <br />
            <input
              value={value.year}
              onChange={(e) => setValue({ ...value, year: e.target.value })}
              type="text"
              placeholder="Year..."
              className="border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
            {validateYear && <p className="text-[red]">Maydon tolmagan</p>}
          </div>
          <br />
          <div>
            <label className="text-" htmlFor="">
              Color
            </label>
            <br />
            <input
              value={value.color}
              type="text"
              onChange={(e) => setValue({ ...value, color: e.target.value })}
              placeholder="	Color..."
              className="border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
            {validateColor && <p className="text-[red]">Maydon tolmagan</p>}
          </div>
          <br />
          <div>
            <label className="text-" htmlFor="">
              Shina
            </label>
            <br />
            <input
              value={value.shina}
              onChange={(e) => setValue({ ...value, shina: e.target.value })}
              type="number"
              placeholder="Shina..."
              className="border-[none] bg-[rgb(8,8,13)] w-[100%] h-[40px] pl-[10px]"
            />
            {validateShina && <p className="text-[red]">Maydon tolmagan</p>}
          </div>
          <div className="mt-5">
            <button className="">Qoshish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostCars;
