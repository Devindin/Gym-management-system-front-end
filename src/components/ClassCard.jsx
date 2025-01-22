import React from "react";

function ClassCard({ className, day, duration }) {
  return (
    <div className="bg-[#F1F5F9] border-[3px] border-[#94A3B8] h-[165px] w-[350px] flex mt-10 rounded-[35px] items-center px-6">
      <div className="flex flex-col items-end text-right w-full">
        <h1 className="text-[#334155] text-[24px] font-bold">{className}</h1>
        <h1 className="text-[#334155] text-[16px]">{day}</h1>
        <h1 className="text-[#334155] text-[16px]">{duration}</h1>
      </div>
    </div>
  );
}

export default ClassCard;
