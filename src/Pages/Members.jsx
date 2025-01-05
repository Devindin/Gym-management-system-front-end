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

function Members() {
  const [currentDate, setCurrentDate] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleEditClick = (member) => {
    setSelectedMember(member);
    setShowEditPopup(true);
  };

  const handleViewClick = (member) => {
    setSelectedMember(member);
    setShowViewPopup(true);
  };

  const handleDeleteClick = (member) => {
    setSelectedMember(member);
    setShowDeletePopup(true);
  };

  return (
    <div className="bg-[#F1F5F9]  w-full flex flex-col">
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
              564
            </h1>
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
          <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-full flex items-center justify-center mt-6">
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

        <div className="bg-[#F8FAFC]  w-[2000px] flex flex-col ml-[160px]  rounded-tl-3xl">
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

          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
          <MemberField
            memberName="John Doe"
            type="member"
            email="john@gmail.com"
            onEdit={() => handleEditClick({ name: "John Doe", email: "john@gmail.com" })}
            onDelete={() => handleDeleteClick({ name: "John Doe", email: "john@gmail.com" })}
            onView={() => handleViewClick({ name: "John Doe", email: "john@gmail.com" })}
          />
        </div>
      </div>
      {/* Edit Popup */}
      {showEditPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">Edit Member</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedMember?.name || ""}
                  onChange={(e) => setSelectedMember({ ...selectedMember, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2"
                  value={selectedMember?.email || ""}
                  onChange={(e) => setSelectedMember({ ...selectedMember, email: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                  onClick={() => setShowEditPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Popup */}
      {showViewPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">View Member</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value={selectedMember?.name || ""}
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2"
                value={selectedMember?.email || ""}
                disabled
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={() => setShowViewPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this member?</p>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={() => setShowDeletePopup(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => {
                  // Handle delete logic here
                  setShowDeletePopup(false);
                  console.log(`Deleted ${selectedMember?.name}`);
                }}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Members;
