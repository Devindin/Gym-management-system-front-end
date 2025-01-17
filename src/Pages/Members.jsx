import React, { useEffect, useState } from "react";
import MiniLogo from "../assets/MiniLogo.png";
import DashBoardLogo from "../assets/Dashbord_black_icon.png";
import PlansLogo from "../assets/Plans.png";
import MemberLogo from "../assets/Member_white_icon.png";
import TrainerLogo from "../assets/Trainers.png";
import LogoutLogo from "../assets/Logout.png";
import profile from "../assets/profile.png";
import MemberField from "../components/MemberField";
import { Search } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Members() {
  const [currentDate, setCurrentDate] = useState("");
  const [members, setMembers] = useState([]);

  const navigate = useNavigate();

  const handlePlansClick = () => {
    navigate("/plansAndClasses");
  };

  const handleTrainersClick = () => {
    navigate("/trainers");
  };

  const handleMembersClick = () => {
    navigate("/members");
  };

  const handleAdmindashboardClick = () => {
    navigate("/admindashBoard");
  };

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/members")
      .then((response) => {
        console.log("API Response:", response.data);
        setMembers(response.data);
      })
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  
  

  return (
    <div className="bg-[#F1F5F9]  w-full h-screen flex flex-col">
      <div className="flex items-center justify-between ml-8 mt-6">
        <div className="flex items-center space-x-[100px]">
          <img src={MiniLogo} className="w-[49px] h-[74px]" alt="Logo" />

          <div className="flex flex-col">
            <h1 className="font-normal text-[56px] leading-[54px]">Members</h1>
            <span className="ml-1">{currentDate}</span>
          </div>
        </div>
        <div className="flex flex-col mr-6">
          <span className="">Total Members</span>
          <div className="flex justify-end">
          <h1 className="font-semibold text-[36px] leading-[40px] text-[#008800] mr-2 ">
              {members.length}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10 ml-8 space-x-8">
        <div className="flex flex-col">
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6 cursor-pointer"
          onClick={handleAdmindashboardClick}
          >
            <img
              src={DashBoardLogo}
              alt="Dashboard Logo"
              className="w-[24px] h-[24px]"
            />
          </div>

          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6 cursor-pointer"
          onClick={handlePlansClick}
          >
            <img
              src={PlansLogo}
              alt="Plans Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6 cursor-pointer"
          onClick={handleTrainersClick}
          >
            <img
              src={TrainerLogo}
              alt="Trainer Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-full flex items-center justify-center mt-6 cursor-pointer"
          onClick={handleMembersClick}
          >
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

        <div className="bg-[#F8FAFC]  w-[2000px] h-full flex flex-col ml-[160px]  rounded-tl-3xl">
          <div className="relative mt-10 ml-[423px]">
            <div className="flex items-center w-[542px] h-[35px] border-t opacity-50 rounded-[15px] border border-[#64748B]">
              <input
                type="text"
                className="w-full h-full px-2 rounded-l-[15px] focus:outline-none"
              />
              <div className="h-full w-[1px] bg-[#64748B] mx-2"></div>
              <Search
                className="text-[#64748B] cursor-pointer"
                style={{ fontSize: 32 }}
              />
            </div>
          </div>
          {members.length === 0 ? (
              <p className="text-center mt-4">No members available</p>
            ) : (
              members.map((member, index) => (
                <MemberField
                  key={index}
                  memberName={member.memberName}
                  memberType={member.memberType}
                  memberEmail={member.memberEmail}
                  
                />
              ))
            )}
         
        </div>
      </div>
      
    </div>
  );
}

export default Members;
