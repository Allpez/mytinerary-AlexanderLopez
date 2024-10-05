import React from 'react'
import { NavLink } from "react-router-dom";

const routes = [
    {to: "/", text: "Home"},
    {to: "/cities", text: "Cities"},
    {to: "/user", text: "User"},
]

function SideBar() {

    const activeClass = "text-red-600 font-bold"
    const inactiveClass = "text-blue-600"

  return (
     
    <nav className="bg-green-300">
    <ul className="flex gap-4">
      {routes.map((r,index) => (
        <li key={index}>
          <NavLink to={r.to} className={({isActive})=> isActive ? activeClass : inactiveClass}>{r.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default SideBar