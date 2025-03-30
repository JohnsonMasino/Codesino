import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-2">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Codesino Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110 hover:brightness-125"
            />
          </Link>
          <Link
            to="/"
            className="text-lg font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:brightness-125 transition-all duration-300"
          >
            Codesino Dev
          </Link>
        </div>

        <nav>
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
      </div>
    </header>
  );
};

export default Header;
