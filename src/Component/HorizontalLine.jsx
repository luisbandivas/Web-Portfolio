import React from "react";

const HorizontalLine = () => {
  return (
    <div className="flex items-center">
      <div className="w-2 h-2 bg-f-light rotate-45"></div>
      <div className="flex-1 h-[2px] bg-f-light"></div>
      <div className="w-2 h-2 bg-f-light rotate-45"></div>
    </div>
  );
};

export default HorizontalLine;
