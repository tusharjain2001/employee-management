import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-gray-500 p-4 text-white ">
        <div className="font-semibold text-xl ">Employee Management</div>
        <div className="flex list-none gap-4 cursor-pointer">
          <li className="hover:underline hover:text-red-400">Home</li>
          <li className="hover:underline hover:text-red-400">About</li>
          <li className="hover:underline hover:text-red-400"> Profile</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
