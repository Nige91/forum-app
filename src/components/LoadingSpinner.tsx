import {FaSpinner} from "react-icons/fa";
import React from "react";

const LoadingSpinner: React.FC = ()=>{
  return <div className="flex items-center justify-center h-screen">
    <FaSpinner className="animate-spin text-blue-500 text-4xl"/>
  </div>;
}

export default LoadingSpinner