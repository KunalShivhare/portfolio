"use client";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MenuItem } from "./menuItem";
import { NavbarIcon } from "./navbarIcon";
import { NavbarLinks } from "./navbarLinks";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClickMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-[100%] backdrop-blur-[10px] z-10 ">
      <nav className="flex justify-normal items-stretch border-2 border-red-50">
        <div className="flex max-w-3xl p-2 items-center justify-between">
          <div className="mr-20">
            <h1 className="tracking-tighter font-mono">Kunal Shivhare</h1>
          </div>
          <div className="hidden w-full flex-grow items-center md:flex md:w-auto">
            <NavbarLinks href={"/projects"}>Projects</NavbarLinks>
            <NavbarLinks href={"/blogs"}>Blogs</NavbarLinks>
          </div>
          <div
            onClick={handleOnClickMenu}
            className="md:hidden cursor-pointer px-2 py-1 border-[1px] border-gray-400 rounded-md"
          >
            <MenuOutlined size={10} />
          </div>
          {/* <div
          className={
            menuOpen
              ? "fixed right-0 top-0 w-[100%] md:hidden h-screen bg-black ease-in duration-200"
              : "fixed right-[-100%] top-0 h-screen ease-in duration-200"
          }
          >
            <div className="flex w-full items-center justify-end pt-10 pr-10">
              <div className="cursor-pointer">
                <CloseOutlined
                  onClick={handleOnClickMenu}
                  size={25}
                  style={{
                    color: "#fff",
                  }}
                />
              </div>
            </div>
            <div className="pt-10 items-center">
              <MenuItem href={"/projects"}>Projects</MenuItem>
              <MenuItem href={"/blogs"}>Blogs</MenuItem>
              <MenuItem href={"/about"}>About</MenuItem>
              <MenuItem href={"/contact"}>Contact Me!</MenuItem>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
}
