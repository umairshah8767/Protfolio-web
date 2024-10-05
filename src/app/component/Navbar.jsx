"use client";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay"; // Adjust the path as necessary

import React , {useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const navLinks = [ // Renamed the variable to avoid conflict
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen,setnevbarOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className=" text-2lg text-4xl font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu  md:hidden ">
            {
              !navbarOpen ? (
                <button onClick={()=> setnevbarOpen(true)} className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white "> <Bars3Icon className="h-5 w-5"/> </button>
              ):(
                <button onClick={()=> setnevbarOpen(false)} className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white "> <XMarkIcon className="h-5 w-5"/> </button>
              )
            }
        </div>
        <div className="menu hidden md:block w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8  ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay link={navLinks}/>:null }
    </nav>
  );
};

export default Navbar;
