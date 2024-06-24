import React from "react";

const TaskTypeCard = ({ title, count, color }) => {
  return (
    <div className="flex justify-between items-center mb-2 p-2 border-2 rounded-md bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div
        className={`bg-${color}-500 text-white text-sm font-semibold h-6 w-6 flex justify-center items-center rounded-full `}
      >
        {count}
      </div>
    </div>
  );
};

export default TaskTypeCard;
