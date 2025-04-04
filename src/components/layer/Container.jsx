import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-[77.125rem]  px-1.5 sm:px-3 mx-auto relative grow ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
