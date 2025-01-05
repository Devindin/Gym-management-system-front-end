import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"; 

function TrainerField({ trainerName, type, email,onEdit, onDelete, onView }) {
  return (
    <div className="flex h-[48px] items-center justify-between p-4 border border-gray-300 rounded-lg ml-10 mt-4">
      {/* Trainer Name */}
      <span className="text-lg font-medium text-gray-700">{trainerName}</span>

      {/* Type */}
      <span className="text-sm text-gray-500">{type}</span>

      <span className="text-sm text-gray-500">{email}</span>

      {/* Buttons */}
      <div className="flex space-x-16">
        <button
          onClick={onView}
          className="text-blue-500 hover:text-blue-700 text-sm border-2 p-2"
        >
          <FaEdit className="mr-2" />
          Edit
        </button>
        <button
          onClick={onEdit}
          className="text-yellow-500 hover:text-yellow-700 text-sm border-2 p-2"
        >
             <FaEye className="mr-2" />
          View
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 text-sm border-2 p-2"
        >
            <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default TrainerField;
