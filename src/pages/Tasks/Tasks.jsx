import React from "react";
import { TaskCard, TaskTypeCard } from "../../components";

const Tasks = () => {
  const taskColumns = [
    {
      title: "To Do",
      count: 2,
      color: "gray",
      tasks: [<TaskCard key="1" />, <TaskCard key="2" />],
    },
    {
      title: "Doing",
      count: 1,
      color: "amber",
      tasks: [<TaskCard key="3" />],
    },
    {
      title: "In Review",
      count: 3,
      color: "blue",
      tasks: [<TaskCard key="4" />, <TaskCard key="5" />, <TaskCard key="6" />],
    },
    {
      title: "Done",
      count: 3,
      color: "green",
      tasks: [<TaskCard key="7" />, <TaskCard key="8" />, <TaskCard key="9" />],
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center sticky top-0 py-3 bg-gray-100 z-10">
        <div className="w-96">
          <input
            className="w-full p-2 px-4 rounded-lg outline-none shadow-md"
            type="search"
            placeholder="Search Task"
          />
        </div>
        <div>
          <select className="p-2 rounded-lg outline-none cursor-pointer basis-[20%] appearance-none shadow-md ">
            <option disabled selected>
              Filter by Type
            </option>
            <option value="to do">To Do</option>
            <option value="doing">Doing</option>
            <option value="in review">In Review</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      <div className="flex gap-x-8  overflow-x-auto">
        {taskColumns.map((column, index) => (
          <div key={index} className="w-80 bg-gray-100  rounded-lg">
            <TaskTypeCard
              title={column.title}
              count={column.count}
              color={column.color}
            />
            <button className="w-full p-2 mb-2 text-center bg-white rounded-md border-2 border-dashed">
              Add Task +
            </button>
            <div className="space-y-4">{column.tasks.map((task) => task)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
