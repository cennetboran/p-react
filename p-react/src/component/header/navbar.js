import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center text-lg text-primary">
      <div className="">
        <div className="flex gap-12 ">
          <a href="Home" className="hover:text-secondary">
            Home
          </a>
          <a href="About" className="hover:text-secondary">
            About
          </a>
          <a href="Services" className="hover:text-secondary">
            Services
          </a>
          <a href="Facilities" className="hover:text-secondary">
            Facilities
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
