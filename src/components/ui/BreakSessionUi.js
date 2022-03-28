import React from "react";
export const BreakSessionContainer = ({ children, ...props }) => {
  return (
    <div className="flex flex-col items-center" {...props}>
      {children}
    </div>
  );
};

export const BreakSessionLabel = ({ children, ...props }) => {
  return <p className="text-lg text-blue-500">{children}</p>;
};

export const BreakSessionTime = ({ children, ...props }) => {
  return <p className="text-4xl font-bold text-black">{children}</p>;
};

export const Buttons = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="mt-3 text-2xl text-gray-800 px-5 py-2 bg-slate-200
       rounded "
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
