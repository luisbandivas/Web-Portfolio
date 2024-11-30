import React from "react";

const HorizontalLine = () => {
  return (
    <div className="flex items-center">
      <div className="w-[6px] h-[6px] bg-zinc-500 rotate-45"></div>
      <div className="flex-1 h-[1px] bg-zinc-500"></div>
      <div className="w-[6px] h-[6px] bg-zinc-500 rotate-45"></div>
    </div>
  );
};

export default HorizontalLine;
