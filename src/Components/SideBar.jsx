import React, { useState } from "react";
import "../styles/SideBar.css";
import { NavLink } from "react-router-dom";

//React Icons
import { FaUser } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const routes = [
  { to: "/", text: <><IoHome />Home</> },
  { to: "/cities", text: <><FaCity />Cities</> },
  { to: "/user", text: <><FaUser />Login</> },
]

function SideBar() {

  const activeClass = "text-white font-extrabold"
  const inactiveClass = "text-blue-600"

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <nav className="w-full">
          <ul className="sidebar-menu w-auto">
            {routes.map((r, index) => (
              <li key={index}>
                <NavLink to={r.to} className={({ isActive }) => isActive ? activeClass : inactiveClass}>{r.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
