import React from "react";

const NavBar = () => {
  return (
    <div className="text-p-rg flex p-8">
      <section className="w-2/5 font-medium">
        <h1>LM BANDIVAS</h1>
      </section>
      <section className="w-3/5 flex justify-between">
        <p>Under Development</p>
        <nav className="flex gap-6 font-medium">
          <a href="">Project</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
