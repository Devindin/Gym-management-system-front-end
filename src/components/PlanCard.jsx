import React from "react";
import Logo from "../assets/whitelogo.png";

function PlanCard({planName, price }) {
  return (
    <div className="bg-gradient-to-r from-[#4C1D95] to-[#C4B5FD] h-[196px] w-[400px] flex  mt-10 rounded-[35px] items-center px-6 ">
      <img
        src={Logo}
        className="h-[100px] w-[100px] object-contain"
        alt="Logo"
      />
      <div className="flex flex-col ml-4 items-end">
        <h1 className="text-white font-bold  text-[30px] ">{planName}</h1>
        <h1 className="text-white font-poppins font-bold text-[48px] leading-[72px]">
          {price} LKR
        </h1>
      </div>
    </div>
  );
}

export default PlanCard;
