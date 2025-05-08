import React from "react";

export const Demo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full py-24">
      {children}
    </div>
  );
};
