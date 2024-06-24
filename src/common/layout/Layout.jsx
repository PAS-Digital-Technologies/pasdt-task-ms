import React from "react";
import Header from "./Header";
// import CategoriesSidebar from "../components/CategoriesSidebar/CategoriesSidebar";

const Layout = (props) => {
  return (
    <div className="w-screen h-screen scroll-smooth  ">
      <div className="w-full h-[8%] sticky top-0 z-20">
        <Header />
      </div>

      <div className="h-[92%] w-full flex justify-between overflow-y-auto custom-scrollbar bg-gray-100 scrollbar-md">
        <div className="w-[15%] h-full p-4 border-r sticky top-0">
          Sidebar content
        </div>
        <div className="w-[85%] px-4">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
