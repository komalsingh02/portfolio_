import React from "react";
import { TiThMenu } from "react-icons/ti";
const Nav = () => {
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white ">
      <h1 className="w-full  font-bold text-3xl text-[#00df90]">React.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4 ">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4 ">About</li>
      </ul>
      <div className="">
        <TiThMenu size={30} />
      </div>
      <div className="fixed left-0 top-0  w-[40%] h-full border-r border-gray-900 bg-black">
        <ul className="pt-24 uppercase">
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400 ">Company</li>
          <li className="p-4 border-b border-gray-400">Resources</li>
          <li className="p-4 border-b border-gray-400 ">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
