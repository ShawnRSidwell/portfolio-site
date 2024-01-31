import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FileText, Hammer, Home, Mail, Menu, UserRound, X } from "lucide-react";

function Navlinks() {
  return (
    <>
      <NavLink to="/" className="flex items-center gap-1 text-base">
        <Home size="1em" /> Home
      </NavLink>
      <NavLink to="about" className="flex items-center gap-1 text-base">
        <UserRound size="1em" />
        About
      </NavLink>
      <NavLink to="projects" className="flex items-center gap-1 text-base">
        {" "}
        <Hammer size="1em" />
        Projects
      </NavLink>
      <NavLink to="resume" className="flex items-center gap-1 text-base">
        <FileText size="1em" />
        Resume
      </NavLink>
      <NavLink to="contact" className="flex items-center gap-1 text-base">
        <Mail size="1em" /> Contact
      </NavLink>
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`w-1/3 flex justify-end`}>
        <div className="hidden w-full md:flex justify-between gap-3">
          <Navlinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />} </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <Navlinks />
        </div>
      )}
    </>
  );
}

export default Nav;
