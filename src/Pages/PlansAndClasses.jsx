import React, { useEffect, useState } from "react";
import MiniLogo from "../assets/MiniLogo.png";
import Logo from "../assets/whitelogo.png";
import DashBoardLogo from "../assets/Dashbord_black_icon.png";
import PlansLogo from "../assets/Plans_white_icon.png";
import MemberLogo from "../assets/Members.png";
import TrainerLogo from "../assets/Trainers.png";
import LogoutLogo from "../assets/Logout.png";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import ClassCard from "../components/ClassCard";
import PlanCard from "../components/PlanCard";

function PlansAndClasses() {
  const [currentDate, setCurrentDate] = useState("");
  const [classes, setClasses] = useState([]);
  const [plans, setPlans] = useState([]);
  

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

  const handleLogoutClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formattedDate);

    // Fetch classes from backend
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/classes");
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();

    const fetchPlans = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/plans");
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching pans:", error);
      }
    };

    fetchPlans();
  }, []);

  

  return (
    <div className="bg-[#F1F5F9]  w-full h-full flex flex-col ">
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
          <div
            className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6 cursor-pointer"
            onClick={handleAdmindashboardClick}
          >
            <img
              src={DashBoardLogo}
              alt="Dashboard Logo"
              className="w-[24px] h-[24px]"
            />
          </div>

          <div
            className="w-[48px] h-[48px] bg-[#6366F1] rounded-full flex items-center justify-center mt-6 cursor-pointer"
            onClick={handlePlansClick}
          >
            <img
              src={PlansLogo}
              alt="Plans Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div
            className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6 cursor-pointer"
            onClick={handleTrainersClick}
          >
            <img
              src={TrainerLogo}
              alt="Trainer Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div
            className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6 cursor-pointer"
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
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-4 cursor-pointer"
          onClick={handleLogoutClick}
          >
            <img
              src={LogoutLogo}
              alt="Logout Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>

        <div className="bg-[#F8FAFC] w-[2000px]  flex flex-col ml-[160px]  rounded-tl-3xl overflow-y-auto">
          <h1 className="mt-8 ml-8 font-semibold text-[24px]">Plans</h1>

          <div className="grid grid-cols-3 mb-10 ml-10 mr-20">
           
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              planName={plan.planName}
              price={plan.price}
            />
          ))}
            
            
          </div>
          <h1 className="ml-8 font-semibold text-[24px]">Classes</h1>

          <div className="grid grid-cols-3 mb-10 ml-10 mr-20">
          
          {classes.map((cls) => (
              <ClassCard
                key={cls.id}
                className={cls.className}
                day={cls.day}
                duration={cls.duration}
              />
            ))}
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansAndClasses;
