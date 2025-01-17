import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniLogo from "../assets/MiniLogo.png";
import Logo from "../assets/Logo.png";
import DashBoardLogo from "../assets/DashBoard.png";
import PlansLogo from "../assets/Plans.png";
import MemberLogo from "../assets/Members.png";
import TrainerLogo from "../assets/Trainers.png";
import LogoutLogo from "../assets/Logout.png";
import Button from "../components/Button";
import profile from "../assets/profile.png";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function AdminDashBoard() {
  const [currentDate, setCurrentDate] = useState("");
  const [showAddPlanPopup, setShowAddPlanPopup] = useState(false);
  const [showAddClassPopup, setShowAddClassPopup] = useState(false);
  const [showAddTrainerPopup, setShowAddTrainerPopup] = useState(false);
  const [showAddMemberPopup, setShowAddMemberPopup] = useState(false);

  const [planName, setPlanName] = useState("");
  const [price, setPrice] = useState("");
  const [plans, setPlans] = useState([]);

  const [className, setClassName] = useState("");
  const [day, setDay] = useState("");
  const [duration, setDuration] = useState("");
  //Trainer
  const [trainerName, setTrainerName] = useState("");
  const[expertise,setExpertise] = useState("");
  const[traineremail,setTraineremail] = useState("");
  //Member
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setmemberEmail] = useState("");
  const [memberType, setMemberType] = useState("");
  
  

  const navigate = useNavigate();

  const handleAddPlan = async (e) => {
    e.preventDefault();
    try {
      // Add plan to Firestore
      await addDoc(collection(db, "plans"), { planName, price });
      alert("Plan added successfully!");
      setShowAddPlanPopup(false);
      setPlanName("");
      setPrice("");
      fetchPlans(); // Refresh the plans list
    } catch (error) {
      console.error("Error adding plan:", error);
    }
  };

  const fetchPlans = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "plans"));
      const plansList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlans(plansList);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  // Fetch plans on component mount
  React.useEffect(() => {
    fetchPlans();
  }, []);

  const handleAddClass = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "classes"), { className, day, duration });
      alert("Class added successfully!");
      setShowAddClassPopup(false);
      setClassName("");
      setDay("");
      setDuration("");
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };
  
  const handleAddTrainer = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "trainers"), { trainerName,expertise,traineremail });
      alert("Trainer added successfully!");
      setShowAddTrainerPopup(false);
      setTrainerName("");
    } catch (error) {
      console.error("Error adding trainer:", error);
    }
  };
  
  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "members"), { memberName,memberType,memberEmail });
      alert("Member added successfully!");
      setShowAddMemberPopup(false);
      setMemberName("");
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

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

  // Disable scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-[#F1F5F9] h-screen w-full flex flex-col">
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

      <div className="flex flex-row mt-10 ml-8 space-x-8">
        <div className="flex flex-col">
          <div
            className="w-[48px] h-[48px] bg-[#6366F1] rounded-full flex items-center justify-center mt-6 cursor-pointer"
            onClick={handleAdmindashboardClick}
          >
            <img
              src={DashBoardLogo}
              alt="Dashboard Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div
            className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-6 cursor-pointer"
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

          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full overflow-hidden flex items-center justify-center cursor-pointer mt-28">
            <img
              src={profile}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[48px] h-[48px] bg-[#C7D2FE] rounded-full flex items-center justify-center mt-4 cursor-pointer">
            <img
              src={LogoutLogo}
              alt="Logout Logo"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>

        <div className="bg-[#F8FAFC] h-[736px] w-[2000px] flex flex-col ml-[160px] rounded-tl-3xl">
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
              <Button
                label="Add plans"
                textcolor="#64748B"
                eventname={() => setShowAddPlanPopup(true)}
              />
              <Button
                label="Add Classes"
                textcolor="#64748B"
                eventname={() => setShowAddClassPopup(true)}
              />
              <Button
                label="Add trainers"
                textcolor="#64748B"
                eventname={() => setShowAddTrainerPopup(true)}
              />
              <Button
                label="Add Members"
                textcolor="#64748B"
                eventname={() => setShowAddMemberPopup(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form for Add Plan */}
      {showAddPlanPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">Add Plan</h2>
            <form onSubmit={handleAddPlan}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Plan Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter plan name"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Price
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#475569] text-white rounded-lg"
                  onClick={() => setShowAddPlanPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#6366F1] text-white rounded-lg"
                >
                  Add Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Popup Form for Add Class */}
      {showAddClassPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">Add Class</h2>
            <form onSubmit={handleAddClass}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Class Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter class name"
                  value={className}
            onChange={(e) => setClassName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  day
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter day"
                  value={day}
            onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter class duration"
                  value={duration}
            onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#475569] text-white rounded-lg"
                  onClick={() => setShowAddClassPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#6366F1] text-white rounded-lg"
                >
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Popup Form for Add Trainer */}
      {showAddTrainerPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">Add Trainer</h2>
            <form onSubmit={handleAddTrainer}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Trainer Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter trainer name"
                  value={trainerName}
                  onChange={(e) => setTrainerName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Expertise
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter trainer expertise"
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  E mail
                </label>
                <input
                  type="emali"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter email"
                  value={traineremail}
                  onChange={(e) => setTraineremail(e.target.value)}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#475569] text-white rounded-lg"
                  onClick={() => setShowAddTrainerPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#6366F1] text-white rounded-lg"
                >
                  Add Trainer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Popup Form for Add Member */}
      {showAddMemberPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">Add Member</h2>
            <form onSubmit={handleAddMember}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Member Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter member name"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Member Type
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter member type"
                  value={memberType}
                  onChange={(e) => setMemberType(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#64748B] mb-1">
                  Member Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter member email"
                  value={memberEmail}
                  onChange={(e) => setmemberEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#475569] text-white rounded-lg"
                  onClick={() => setShowAddMemberPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#6366F1] text-white rounded-lg"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashBoard;
