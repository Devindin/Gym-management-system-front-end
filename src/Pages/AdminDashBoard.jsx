import React, { useEffect,useState } from "react";
import MiniLogo from "../assets/MiniLogo.png";
import Logo from "../assets/Logo.png";
import DashBoardLogo from "../assets/DashBoard.png";
import PlansLogo from "../assets/Plans.png";
import MemberLogo from "../assets/Members.png";
import TrainerLogo from "../assets/Trainers.png";
import LogoutLogo from "../assets/Logout.png";
import Button from "../components/Button";
import profile from "../assets/profile.png";

function AdminDashBoard() {

    const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Get current date and format it to "Jan 03, 2025"
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Cleanup the effect to reset overflow on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-[#F1F5F9] h-screen w-full flex flex-col p-8">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-[100px]">
          <img src={MiniLogo} className="w-[49px] h-[74px]" alt="Logo" />

          <div className="flex flex-col">
            <h1 className="font-normal text-[56px] leading-[54px]">
              Dashboard
            </h1>
            <span className="ml-1">{currentDate}</span>
          </div>
        </div>

        {/* Amount in the Right Corner */}
        <div className="flex flex-col">
          <span className="">Last month</span>
          <div className="flex">
            <h1 className="font-semibold text-[36px] leading-[40px] text-[#008800] mr-2">
              218, 740.00
            </h1>
            <span className="font-poppins font-semibold text-[26px] leading-[20px] uppercase text-[#595D67] mr-20">
              LKR
            </span>
          </div>
        </div>
      </div>

      {/* Main Section with Circles and Content in a Row */}
      <div className="flex flex-row mt-10 ml-4 space-x-8">
        {/* Sidebar with 4 circles */}
        <div className="flex flex-col">
          <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-full flex items-center justify-center mt-6">
            <img
              src={DashBoardLogo}
              alt="Dashboard Logo"
              className="w-[24px] h-[24px]"
            />
          </div>

          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6">
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

        {/* Additional Content */}

        <div className="bg-[#F8FAFC] h-[736px] w-[2000px] flex flex-col ml-[160px]  rounded-3xl">
          <div className="flex flex-row justify-between ml-20 mr-20 mt-10">
            <div className="flex">
              <h1 className="font-poppins font-medium text-[20px] leading-[25px] tracking-[0.1em] text-[#94A3B8] ml-20">
                TOTAL
                <br /> NUMBERS
              </h1>
              <h1 className="font-poppins font-bold text-[48px] leading-[25px] tracking-[0.1em] text-[#475569] mt-4 ml-4">
                012
              </h1>
            </div>
            <div className="flex ">
              <h1 className="font-poppins font-medium text-[20px] leading-[25px] tracking-[0.1em] text-[#94A3B8]">
                TOTAL <br></br>TRAINERS
              </h1>
              <h1 className="font-poppins font-bold text-[48px] leading-[25px] tracking-[0.1em] text-[#475569] mt-4 ml-4">
                564
              </h1>
            </div>
            <div className="flex ">
              <h1 className="font-poppins font-medium text-[20px] leading-[25px] tracking-[0.1em] text-[#94A3B8]">
                ACTIVE <br /> CLASSES
              </h1>

              <h1 className="font-poppins font-bold text-[48px] leading-[25px] tracking-[0.1em] text-[#475569] mt-4 mr-20 ml-4">
                021
              </h1>
            </div>
          </div>
          <div className="flex columns-2">
            <div className="bg-[#1E1B4B] h-[380px] w-[679px] flex flex-col ml-[100px] mt-10 rounded-[35px] justify-center items-center">
              <img src={Logo} className="w-[350px] justify-center" alt="Logo" />
            </div>
            <div className="flex flex-col justify-center items-center ml-20">
              <Button label="Add plans" textcolor="#64748B" type="submit" />
              <Button label="Add Classes" textcolor="#64748B" type="submit" />
              <Button label="Add trainers" textcolor="#64748B" type="submit" />
              <Button label="Add Members" textcolor="#64748B" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
