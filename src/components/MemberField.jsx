import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function MemberField({ memberName, type, email, onEdit, onDelete, onView }) {
  return (
    <div className="flex h-[55px] w-[1300px] items-center justify-between p-4 border border-gray-300 rounded-lg ml-10 mt-4">
      <span className="text-lg font-medium text-gray-700">{memberName}</span>

      <span className="text-sm text-gray-500">{type}</span>

      <span className="text-sm text-gray-500">{email}</span>

      {/* Buttons */}
      <div className="flex space-x-16 items-center justify-center">
        <button
          onClick={onView}
          className="text-[#16A34A] text-sm border-2 border-[#16A34A] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
        >
          <div className="flex items-center justify-center">
            <FaEdit className="mr-2" />
            Edit
          </div>
        </button>
        <button
          onClick={onEdit}
          className="text-[#4f46E5] text-sm border-2 border-[#4f46E5] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
        >
          <div className="flex items-center justify-center">
            <FaEye className="mr-2" />
            View
          </div>
        </button>
        <button
          onClick={onDelete}
          className="text-[#E11D48] text-sm border-2 border-[#E11D48] p-2 w-[100px] h-[35px] items-center justify-center rounded-[10px]"
        >
          <div className="flex items-center justify-center">
            <FaTrash className="mr-2" />
            Delete
          </div>
        </button>
      </div>
    </div>
  );
}

export default MemberField;
