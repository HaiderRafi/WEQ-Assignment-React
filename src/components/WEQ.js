import React, { useState } from "react";
import { HOSPITAL_DATA } from "./constant";
import WEQTable from "./WEQTable";

const WEQ = () => {
  let [count, setCount] = useState(1); //page count state
  let [pageToBe, setPageToBe] = useState(10); //dropdown state

  function handlePrev() {
    //logic for not go below than 1
    if (count > 1) {
      setCount((count) => count - 1);
    }
  }

  function handleNext() {
    //logic for not exceeding the limit
    if (count < Math.ceil(HOSPITAL_DATA.length / pageToBe))
      setCount((count) => count + 1);
  }
  console.log(pageToBe);

  return (
    <>
      <div className="flex justify-center items-center m-2 p-2">
        <h1 className="text-2xl font-bold">WEQ ASSIGNMNET</h1>
      </div>
      <div className="m-2">
        <table className="border border-black w-full  p-2">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-1 py-2">Sr No.</th>
              <th className="px-1 py-2">Hospital</th>
              <th className="px-1 py-2">City</th>
              <th className="px-1 py-2">State</th>
              <th className="px-1 py-2">Address</th>
              <th className="px-1 py-2">Pin</th>
            </tr>
          </thead>
          <tbody>
            {HOSPITAL_DATA.slice(
              //pagination logic with the help of slice
              count * pageToBe - pageToBe,
              count * pageToBe
            ).map((data, index) => {
              return <WEQTable key={index} item={data} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center pt-3">
        {/* prev button */}
        <button
          className="p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-black hover:bg-gray-800 hover:text-white"
          onClick={handlePrev}
        >
          Prev
        </button>

        {/* next button */}
        <button
          className="p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-black hover:bg-gray-800 hover:text-white"
          onClick={handleNext}
        >
          Next
        </button>

        {/* page count */}
        <h1>{count}</h1>

        {/* dropdown */}
        <select
          className="bg-gray-100 m-2 p-2 border border-orange-500 "
          value={pageToBe}
          onChange={(e) => {
            setPageToBe(e.target.value);
          }}
        >
          <option value="10">10 Pages </option>
          <option value="20">20 Pages</option>
          <option value="30">30 Pages</option>
          <option value="50">50 Pages</option>
          <option value="60">60 Pages</option>
          <option value="70">70 Pages</option>
          <option value="80">80 Pages</option>
          <option value="90">90 Pages</option>
          <option value="100">100 Pages</option>
        </select>
      </div>
    </>
  );
};

export default WEQ;
