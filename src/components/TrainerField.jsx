import {React,useState} from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function TrainerField({ trainerName, expertise, traineremail,trainerId, onDelete }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/trainers/${trainerId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        onDelete(trainerId); // Remove trainer from UI
        setShowPopup(false); // Close popup
      } else {
        const data = await response.json();
        console.error("Failed to delete trainer:", data.message);
      }
    } catch (error) {
      console.error("Error deleting trainer:", error);
    }
  };
  

  return (
    <div className="flex h-[55px] w-[1300px] items-center justify-between p-4 border border-gray-300 rounded-lg ml-10 mt-4 mr-10">
      {/* Trainer Name */}
      <span className="text-lg font-medium text-gray-700">{trainerName}</span>

      {/* Expertise */}
      <span className="text-sm text-gray-500">{expertise}</span>

      {/* Trainer Email */}
      <span className="text-sm text-gray-500">{traineremail}</span>

      {/* Buttons */}
      <div className="flex space-x-16 items-center justify-center">
        <button
          className="text-[#16A34A] text-sm border-2 border-[#16A34A] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
        >
          <div className="flex items-center justify-center">
            <FaEdit className="mr-2" />
            Edit
          </div>
        </button>
        <button
          className="text-[#4f46E5] text-sm border-2 border-[#4f46E5] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
        >
          <div className="flex items-center justify-center">
            <FaEye className="mr-2" />
            View
          </div>
        </button>
        <button
          className="text-[#E11D48] text-sm border-2 border-[#E11D48] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
          onClick={() => setShowPopup(true)} // Show popup on delete button click
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
            <p className="text-lg font-medium mb-4">Are you sure you want to delete this trainer?</p>
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
    </div>
  );
}

export default TrainerField;
