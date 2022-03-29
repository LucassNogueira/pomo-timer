import React from "react";
export const BreakSessionContainer = ({ children, ...props }) => {
  return (
    <div
      className="flex flex-col justify-around h-[300px] relative items-center col-span-1 w-1/6 text-center bg-white rounded-lg shadow divide-gray-200"
      {...props}
    >
      {children}
    </div>
  );
};

export const BreakSessionLabel = ({ children, ...props }) => {
  return <p className=" text-5xl text-blue-500 ">{children}</p>;
};

export const BreakSessionTime = ({ children, ...props }) => {
  return <p className="text-4xl font-bold text-black  ">{children}</p>;
};

export const Buttons = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="mt-3 text-2xl text-gray-800 px-5 py-2 bg-slate-200
       rounded-md w-[80px] flex justify-around "
    >
      {children}
    </button>
  );
};

export const ButtonContainer = ({ children, ...props }) => {
  return (
    <div {...props} className="grid grid-flow-col gap-2 rounded">
      {children}
    </div>
  );
};
