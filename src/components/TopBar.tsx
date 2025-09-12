import { useState } from "react";
import { GiClothes, GiRunningShoe } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";

export default function IconToggleButton() {
  const [enabled, setEnabled] = useState(false);
  const [inputEnable, setInputEnable] = useState(false);

  return (
    <div className="flex flex-row m-4 gap-4 items-center">
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
        enabled ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <div className="absolute left-1 flex items-center justify-center w-6 h-6">
        <GiClothes className="text-white" />
      </div>
      <span
        className={`relative bg-white w-7 h-7 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          enabled ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {enabled && <GiRunningShoe className="text-gray-800" />}
      </span>
    </button>
    <div className="flex justify-end flex-1 ml-auto">
        <LuSearch onClick={() =>setInputEnable(!inputEnable)} className="text-gray-800" size={25}/>
        {inputEnable && <input type="text" className="border-b-2 border-gray-300 focus:outline-0 focus:border-b-2 focus:border-gray-500 text-gray-600 ml-2 bg-gray-100" placeholder="Search..."/>}
    </div>
    </div>
  );
}
