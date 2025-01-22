import { React, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function TrainerField({trainerName,expertise,traineremail,trainerId,onDelete,onUpdate,}) {

  const [showPopup, setShowPopup] = useState(false);
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [updatedTrainer, setUpdatedTrainer] = useState({
    trainerName,
    expertise,
    traineremail,
  });

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/trainers/${trainerId}`,
        {
          method: "DELETE",
        }
      );
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

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/trainers/${trainerId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedTrainer),
        }
      );

      if (response.ok) {
        onUpdate(trainerId, updatedTrainer); // Update UI with new data
        setShowEditPopup(false); // Close popup
      } else {
        const data = await response.json();
        console.error("Failed to update trainer:", data.message);
      }
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTrainer((prev) => ({ ...prev, [name]: value }));
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
          onClick={() => setShowEditPopup(true)}
        >
          <div className="flex items-center justify-center">
            <FaEdit className="mr-2" />
            Edit
          </div>
        </button>
        <button className="text-[#4f46E5] text-sm border-2 border-[#4f46E5] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
            onClick={() => setShowViewPopup(true)}>
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
            <p className="text-lg font-medium mb-4">
              Are you sure you want to delete this trainer?
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
            <h2 className="text-lg font-semibold mb-4">Edit Trainer Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="trainerName"
                value={updatedTrainer.trainerName}
                onChange={handleInputChange}
                placeholder="Trainer Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="expertise"
                value={updatedTrainer.expertise}
                onChange={handleInputChange}
                placeholder="Expertise"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="traineremail"
                value={updatedTrainer.traineremail}
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
            <h2 className="text-lg font-semibold mb-4">Trainer Details</h2>
            <div className="space-y-4">
              <p><strong>Name:</strong> {trainerName}</p>
              <p><strong>Expertise:</strong> {expertise}</p>
              <p><strong>Email:</strong> {traineremail}</p>
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

export default TrainerField;
