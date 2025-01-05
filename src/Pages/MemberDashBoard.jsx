import React, { useEffect, useState } from "react";
import MiniLogo from "../assets/MiniLogo.png";
import DashBoardLogo from "../assets/DashBoard.png";
import TrainerLogo from "../assets/Trainers.png";
import LogoutLogo from "../assets/Logout.png";
import profile from "../assets/profile.png";
import Home from "../assets/Home.png";

function MemberDashBoard() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  // Disable scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="bg-[#F1F5F9] h-screen w-full flex flex-col ">
      <div className="flex items-center justify-between mt-6 ml-8">
        <div className="flex items-center space-x-[100px]">
          <img src={MiniLogo} className="w-[49px] h-[74px]" alt="Logo" />

          <div className="flex flex-col">
            <h1 className="font-normal text-[56px] leading-[54px]">
              Dashboard
            </h1>
            <span className="ml-1">{currentDate}</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center mr-6">
            <div className="w-[12px] h-[12px] bg-[#22C55E] rounded-full mr-4 mb-6 "></div>
            <h1 className="font-semibold text-[36px] leading-[40px] text-[#F0ABFC]">
              GOLD MEMBER
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-10 ml-8 space-x-8 ">
        <div className="flex flex-col">
          <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-full flex items-center justify-center mt-6">
            <img
              src={DashBoardLogo}
              alt="Dashboard Logo"
              className="w-[24px] h-[24px]"
            />
          </div>

          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6">
            <img src={Home} alt="home Logo" className="w-[24px] h-[24px]" />
          </div>

          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6">
            <img
              src={TrainerLogo}
              alt="Trainer Logo"
              className="w-[24px] h-[24px]"
            />
          </div>

          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full overflow-hidden flex items-center justify-center mt-36">
            <img
              src={profile}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-4">
            <img
              src={LogoutLogo}
              alt="Logout Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>

        <div className="bg-[#F8FAFC] w-full h-screen flex items-center justify-end ml-[160px] rounded-tl-3xl">
          <div className="text-right mr-20 mb-40">
            <span className="text-[16px] block">Since 13 Nov, 2023</span>
            <h1 className="text-[96px] font-bold">JHON DEO</h1>
            <span className="text-[20px] block ">jhondeo@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDashBoard;
