import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.pushState({}, "", "/");
  };

  return (
    showButton && (
      <div
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full shadow-lg flex items-center justify-center cursor-pointer group"
        onClick={scrollToTop}
      >
        <button className="text-white group-hover:scale-105">↑</button>
        <div className="w-10 h-10 border-dashed border-2 rounded-full absolute top-0 left-0 animate-spin"></div>
      </div>
    )
  );
};

export default ScrollToTop;
