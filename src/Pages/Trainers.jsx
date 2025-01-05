import React, { useEffect, useState } from "react";
import MiniLogo from "../assets/MiniLogo.png";
import DashBoardLogo from "../assets/DashBoard.png";
import PlansLogo from "../assets/Plans.png";
import MemberLogo from "../assets/Members.png";
import TrainerLogo from "../assets/Trainers.png";
import LogoutLogo from "../assets/Logout.png";
import profile from "../assets/profile.png";
import TrainerField from "../components/TrainerField";
function Trainers() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Get current date and format it to "Jan 03, 2025"
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="bg-[#F1F5F9] h-screen w-full flex flex-col p-8">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-[100px]">
          <img src={MiniLogo} className="w-[49px] h-[74px]" alt="Logo" />

          <div className="flex flex-col">
            <h1 className="font-normal text-[56px] leading-[54px]">Trainers</h1>
            <span className="ml-1">{currentDate}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="">Total Trainers</span>
          <div className="flex justify-end">
            <h1 className="font-semibold text-[36px] leading-[40px] text-[#008800] mr-2 ">
              021
            </h1>
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
          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />

          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />

          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />

          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />
          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />
          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />
          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />
          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />
          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />
          <TrainerField
            trainerName="John Doe"
            type="Box fit"
            email="john@gmail.com"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onView={() => console.log("View clicked")}
          />
        </div>
      </div>
    </div>
  );
}

export default Trainers;
