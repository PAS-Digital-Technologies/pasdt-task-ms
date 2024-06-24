import React from "react";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineInventory } from "react-icons/md";
import { Link } from "react-router-dom";
// import { APP_URL } from "../../config";
import { GrTask } from "react-icons/gr";

const Header = () => {
  return (
    <header className="w-full h-full flex justify-between items-center px-4 py-1.5 text-inherit shadow-md">
      <div className="flex items-center gap-4">
        <GrTask size={20} />
        <span className="text-2xl font-semibold">Task Management System</span>
      </div>

      {/* <Link to={APP_URL.PROFILE}> */}
      <div className="text-xl font-semibold cursor-pointer">Admin</div>
      {/* </Link> */}
    </header>
  );
};

export default Header;
