import React from "react";
import { BsThreeDots, BsArrowRight } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const TaskCard = () => {
  return (
    <div className="w-72 p-3 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-2">
          <span className="px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
            Review
          </span>
          <span className="px-2 py-1 text-sm font-semibold text-white bg-orange-500 rounded-full">
            Testing
          </span>
        </div>
      </div>
      <h1 className="font-bold text-lg mb-1">Testing Menu Dashboard</h1>
      <p className="text-gray-600 mb-3">
        Reviewing dashboard menu for the maily product
      </p>
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">Sub task</span>
          <span className="text-sm font-medium text-gray-700">6/12</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gray-700 h-2.5 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">12</span>
          <button className="text-gray-400 hover:text-gray-600">
            <BsArrowRight size={20} />
          </button>
        </div>
        <div className="flex -space-x-2">
          <FaUserCircle className="w-6 h-6 rounded-full border-2 border-white" />
          <FaUserCircle className="w-6 h-6 rounded-full border-2 border-white" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
