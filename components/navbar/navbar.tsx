import { NavbarIcon } from "./navbarIcon";
import { NavbarLinks } from "./navbarLinks";

export function Navbar() {
  return (
    <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-0 flex justify-between">
      <NavbarIcon href={"/"} />
      <div className="hidden md:flex">
        <NavbarLinks href={"/projects"}>Projects</NavbarLinks>
        <NavbarLinks href={"/blogs"}>Blogs</NavbarLinks>
        <NavbarLinks href={"/about"}>About</NavbarLinks>
        <NavbarLinks href={"/hire"}>Hire Me!</NavbarLinks>
      </div>
    </nav>
  );
}
