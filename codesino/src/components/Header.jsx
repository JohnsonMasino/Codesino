import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false); 
  };

  return (
    <header className="text-white shadow-md bg-black">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo & Name */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Codesino Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110 hover:brightness-125"
            />
          </Link>
          {/* Hide "Codesino Dev" on small screens */}
          <Link
            to="/"
            className="text-lg font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:brightness-125 transition-all duration-300 hidden md:inline"
          >
            Codesino Dev
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {["Home", "Services", "About", "Contact", "Blog"].map((item) => {
              const path = `/${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <Link
                    to={path}
                    onClick={() => handleClick(path)}
                    className={`relative px-4 py-2 text-sm transition-all duration-300 hover:text-gray-200 ${
                      activeLink === path
                        ? "text-white after:absolute after:inset-0 after:w-full after:h-full after:rounded-full after:border after:border-pink-500 after:bg-gradient-to-r after:from-blue-500 after:to-pink-500 after:opacity-30 after:-z-10"
                        : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black w-full absolute left-0 top-16 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Services", "About", "Contact", "Blog"].map((item) => {
              const path = `/${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <Link
                    to={path}
                    onClick={() => handleClick(path)}
                    className="text-white text-lg transition-all duration-300 hover:text-gray-300"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

