import React, { useEffect, useState } from "react";
import MiniLogo from "../assets/MiniLogo.png";
import Logo from "../assets/whitelogo.png";
import DashBoardLogo from "../assets/Dashbord_black_icon.png";
import PlansLogo from "../assets/Plans_white_icon.png";
import MemberLogo from "../assets/Members.png";
import TrainerLogo from "../assets/Trainers.png";
import LogoutLogo from "../assets/Logout.png";
import profile from "../assets/profile.png";

function PlansAndClasses() {
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

  return (
    <div className="bg-[#F1F5F9]  w-full flex flex-col ">
      <div className="flex items-center justify-between mt-6 ml-8">
        <div className="flex items-center space-x-[100px]">
          <img src={MiniLogo} className="w-[49px] h-[74px]" alt="Logo" />

          <div className="flex flex-col">
            <h1 className="font-normal text-[56px] leading-[54px]">
              Plans & Classes
            </h1>
            <span className="ml-1">{currentDate}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10 ml-8 space-x-8">
        <div className="flex flex-col">
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6">
            <img
              src={DashBoardLogo}
              alt="Dashboard Logo"
              className="w-[24px] h-[24px]"
            />
          </div>

          <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-full flex items-center justify-center mt-6">
            <img
              src={PlansLogo}
              alt="Plans Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6">
            <img
              src={TrainerLogo}
              alt="Trainer Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6">
            <img
              src={MemberLogo}
              alt="Member Logo"
              className="w-[24px] h-[24px]"
            />
          </div>

          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full overflow-hidden flex items-center justify-center mt-28">
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

        <div className="bg-[#F8FAFC] w-[2000px]  flex flex-col ml-[160px]  rounded-tl-3xl">
          <h1 className="mt-8 ml-8 font-semibold text-[24px]">Plans</h1>

          <div className="grid grid-cols-3 mb-10 ml-10 mr-20">
            <div className="bg-gradient-to-r from-[#4C1D95] to-[#C4B5FD] h-[196px] w-[400px] flex  mt-10 rounded-[35px] items-center px-6 ">
              <img
                src={Logo}
                className="h-[100px] w-[100px] object-contain"
                alt="Logo"
              />
              <div className="flex flex-col ml-4 items-end">
                <h1 className="text-black  text-[30px] ">Member</h1>
                <h1 className="text-white font-poppins font-bold text-[48px] leading-[72px]">
                  2000 LKR
                </h1>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#4C1D95] to-[#C4B5FD] h-[196px] w-[400px] flex  mt-10 rounded-[35px] items-center px-6">
              <img
                src={Logo}
                className="h-[100px] w-[100px] object-contain"
                alt="Logo"
              />
              <div className="flex flex-col ml-4 items-end">
                <h1 className="text-black  text-[30px] ">Plus</h1>
                <h1 className="text-white font-poppins font-bold text-[48px] leading-[72px]">
                  2000 LKR
                </h1>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#4C1D95] to-[#C4B5FD] h-[196px] w-[400px] flex  mt-10 rounded-[35px] items-center px-6r ">
              <img
                src={Logo}
                className="h-[100px] w-[100px] object-contain"
                alt="Logo"
              />
              <div className="flex flex-col ml-4 items-end">
                <h1 className="text-black  text-[30px] ">Gold</h1>
                <h1 className="text-white font-poppins font-bold text-[48px] leading-[72px]">
                  2000 LKR
                </h1>
              </div>
            </div>
          </div>
          <h1 className="ml-8 font-semibold text-[24px]">Classes</h1>

          <div className="grid grid-cols-3 mb-10 ml-10 mr-20">
            <div className="bg-[#F1F5F9] border-[3px] border-[#94A3B8] h-[170px] w-[350px] flex mt-10 rounded-[35px] items-center px-6 ">
              <div className="flex flex-col items-end text-right w-full">
                <h1 className="text-[#334155] text-[24px] font-bold">
                  Beginner BOX FIT
                </h1>
                <h1 className="text-[#334155] text-[16px]">Saturday</h1>
                <h1 className="text-[#334155] text-[16px]">
                  2:00 P.M - 4:00 P.M
                </h1>
              </div>
            </div>

            <div className="bg-[#F1F5F9] border-[3px] border-[#94A3B8] h-[170px] w-[350px] flex  mt-10 rounded-[35px] items-center px-6">
            <div className="flex flex-col items-end text-right w-full">
                <h1 className="text-[#334155] text-[24px] font-bold">
                  Beginner BOX FIT
                </h1>
                <h1 className="text-[#334155] text-[16px]">Saturday</h1>
                <h1 className="text-[#334155] text-[16px]">
                  2:00 P.M - 4:00 P.M
                </h1>
              </div>
            </div>
            <div className="bg-[#F1F5F9] border-[3px] border-[#94A3B8] h-[170px] w-[350px] flex  mt-10 rounded-[35px] items-center px-6 ">
            <div className="flex flex-col items-end text-right w-full">
                <h1 className="text-[#334155] text-[24px] font-bold">
                  Beginner BOX FIT
                </h1>
                <h1 className="text-[#334155] text-[16px]">Saturday</h1>
                <h1 className="text-[#334155] text-[16px]">
                  2:00 P.M - 4:00 P.M
                </h1>
              </div>
            </div>
            <div className="bg-[#F1F5F9] border-[3px] border-[#94A3B8] h-[170px] w-[350px] flex  mt-10 rounded-[35px] items-center px-6 mr-20">
            <div className="flex flex-col items-end text-right w-full">
                <h1 className="text-[#334155] text-[24px] font-bold">
                  Beginner BOX FIT
                </h1>
                <h1 className="text-[#334155] text-[16px]">Saturday</h1>
                <h1 className="text-[#334155] text-[16px]">
                  2:00 P.M - 4:00 P.M
                </h1>
              </div>
            </div>
            <div className="bg-[#F1F5F9] border-[3px] border-[#94A3B8] h-[170px] w-[350px] flex  mt-10 rounded-[35px] items-center px-6 mr-20">
            <div className="flex flex-col items-end text-right w-full">
                <h1 className="text-[#334155] text-[24px] font-bold">
                  Beginner BOX FIT
                </h1>
                <h1 className="text-[#334155] text-[16px]">Saturday</h1>
                <h1 className="text-[#334155] text-[16px]">
                  2:00 P.M - 4:00 P.M
                </h1>
              </div>
            </div>
            <div className="bg-[#F1F5F9] border-[3px] border-[#94A3B8] h-[170px] w-[350px] flex  mt-10 rounded-[35px] items-center px-6 mr-20">
            <div className="flex flex-col items-end text-right w-full">
                <h1 className="text-[#334155] text-[24px] font-bold">
                  Beginner BOX FIT
                </h1>
                <h1 className="text-[#334155] text-[16px]">Saturday</h1>
                <h1 className="text-[#334155] text-[16px]">
                  2:00 P.M - 4:00 P.M
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansAndClasses;
