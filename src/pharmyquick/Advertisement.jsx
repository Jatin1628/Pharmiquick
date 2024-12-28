import React from "react";

const Advertisement = () => {
  return (
    <div>
      <div className="flex my-10 mx-7  p-5">
        <div className="h-114 w-[50%] bg-Ad-color1 rounded-xl  m-2"></div>
        <div className="flex flex-col w-[50%] m-2">
          <div className="  rounded-xl bg-Ad-color2 mb-2.5 h-48"></div>
          <div className="  rounded-xl bg-Ad-color3 h-48 ">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
