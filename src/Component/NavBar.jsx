import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white ">
      <h1 className="w-full  font-bold text-3xl text-[#00df90]">React.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4 ">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4 ">About</li>
      </ul>
      <div className="block md:hidden " onClick={handleNav}>
        {nav ? <TiThMenu size={30} /> : <IoCloseCircle size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0  w-[60%] h-full border-r border-gray-900 bg-black ease-in-out duration-300"
        }
      >
        <h1 className="w-full  font-bold text-3xl text-[#00df90] m-4">
          React.
        </h1>
        <ul className="pt-10 uppercase ">
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400 ">Company</li>
          <li className="p-4 border-b border-gray-400">Resources</li>
          <li className="p-4 border-b border-gray-400 ">About</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
