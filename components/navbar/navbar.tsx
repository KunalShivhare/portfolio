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
    <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 sm:pt-0 flex justify-between items-end">
      <NavbarIcon href={"/"} />
      <div className="hidden sm:flex">
        <NavbarLinks href={"/projects"}>Projects</NavbarLinks>
        <NavbarLinks href={"/blogs"}>Blogs</NavbarLinks>
        <NavbarLinks href={"/about"}>About</NavbarLinks>
        <NavbarLinks href={"/hire"}>Hire Me!</NavbarLinks>
      </div>
      <div
        onClick={handleOnClickMenu}
        className="flex sm:hidden cursor-pointer pb-2"
      >
        <MenuOutlined size={25} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[100%] sm:hidden h-screen bg-black ease-in duration-200"
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
      </div>
    </nav>
  );
}
