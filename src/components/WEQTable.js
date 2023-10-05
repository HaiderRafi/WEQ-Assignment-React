import React from "react";

const WEQTable = (props) => {
  return (
    <>
      <tr>
        <td className=" p-2 border">{props?.item["Sr. No."]}</td>
        <td className=" p-2 border">{props?.item?.Hospital}</td>
        <td className=" p-2 border">{props?.item?.City}</td>
        <td className=" p-2  border">{props?.item?.State}</td>
        <td className="p-2  border">{props?.item?.Address}</td>
        <td className="p-2  border">{props?.item?.Pin}</td>
      </tr>
    </>
  );
};

export default WEQTable;
