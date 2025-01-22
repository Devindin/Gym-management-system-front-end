import { React, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function MemberField({ memberName, memberType, memberEmail,memberId,onDelete,onUpdate,}) {
  const [showPopup, setShowPopup] = useState(false);
    const [showViewPopup, setShowViewPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [updatedMember, setUpdatedMember] = useState({
      memberName,
      memberType,
      memberEmail,
    });

    const handleDelete = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/members/${memberId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          onDelete(memberId); // Remove trainer from UI
          setShowPopup(false); // Close popup
        } else {
          const data = await response.json();
          console.error("Failed to delete member:", data.message);
        }
      } catch (error) {
        console.error("Error deleting member:", error);
      }
    };

    const handleUpdate = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/members/${memberId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedMember),
          }
        );
  
        if (response.ok) {
          onUpdate(memberId, updatedMember); // Update UI with new data
          setShowEditPopup(false); // Close popup
        } else {
          const data = await response.json();
          console.error("Failed to update member:", data.message);
        }
      } catch (error) {
        console.error("Error updating member:", error);
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUpdatedMember((prev) => ({ ...prev, [name]: value }));
    };

  return (
    <div className="flex h-[55px] w-[1300px] items-center justify-between p-4 border border-gray-300 rounded-lg ml-10 mt-4">
      <span className="text-lg font-medium text-gray-700">{memberName}</span>

      <span className="text-sm text-gray-500">{memberType}</span>

      <span className="text-sm text-gray-500">{memberEmail}</span>

      {/* Buttons */}
      <div className="flex space-x-16 items-center justify-center">
        <button
          onClick={() => setShowEditPopup(true)}
          className="text-[#16A34A] text-sm border-2 border-[#16A34A] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
        >
          <div className="flex items-center justify-center">
            <FaEdit className="mr-2" />
            Edit
          </div>
        </button>
        <button
         
          className="text-[#4f46E5] text-sm border-2 border-[#4f46E5] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
          onClick={() => setShowViewPopup(true)}
        >
          <div className="flex items-center justify-center">
            <FaEye className="mr-2" />
            View
          </div>
        </button>
        <button
          
          className="text-[#E11D48] text-sm border-2 border-[#E11D48] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
          onClick={() => setShowPopup(true)}
        >
          <div className="flex items-center justify-center">
            <FaTrash className="mr-2" />
            Delete
          </div>
        </button>
      </div>
      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium mb-4">
              Are you sure you want to delete this member?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showEditPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-4">Edit Member Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="memberName"
                value={updatedMember.memberName}
                onChange={handleInputChange}
                placeholder="member Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="memeberType"
                value={updatedMember.memberType}
                onChange={handleInputChange}
                placeholder="Memeber Type"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="memberEmail"
                value={updatedMember.memberEmail}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowEditPopup(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* View Popup */}
      {showViewPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-4">Member Details</h2>
            <div className="space-y-4">
              <p><strong>Name:</strong> {memberName}</p>
              <p><strong>Type:</strong> {memberType}</p>
              <p><strong>Email:</strong> {memberEmail}</p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowViewPopup(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberField;
