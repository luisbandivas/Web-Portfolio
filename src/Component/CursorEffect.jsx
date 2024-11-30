import React, { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradientBg = document.getElementById("gradient-bg");
      const x = e.clientX;
      const y = e.clientY;

      gradientBg.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(59, 74, 71, 0.15), transparent 80%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="gradient-bg"
      className="pointer-events-none fixed inset-0 z-30 transition duration-100 ease-in-out"
    ></div>
  );
};

export default CursorEffect;
