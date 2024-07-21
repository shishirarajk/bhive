import React from "react";
import logo from "../assets/bhive-logo.svg"
import call from "../assets/app-icons/call.png"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 border-b bg-white">
      <div className="container py-4 mx-auto relative text-sm">
        <div className="flex-justify-center items-center">
          <div className="flex flex-items-center justify-between">
            <img src={logo} alt="logo"/>
            <div className="rounded-md border-[#FFBB00] border-solid border-2 p-1">
              <img src={call} alt="call" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
