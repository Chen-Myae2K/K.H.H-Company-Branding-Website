import React from "react";
import { NavLink } from "react-router-dom"; 
import logo from "../assets/home/logo.png";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Track Order", path: "/trackOrder" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="font-inter z-50">
      <header className="fixed top-0 left-0 w-full z-50 font-inter">
        <nav className="bg-white py-3">
          <div className="mx-auto w-[95%] flex justify-between items-center">
            <NavLink
              to="/"
              className="flex justify-center items-center text-gray-800"
            >
              <img src={logo} className="w-[70px]" alt="KHH logo" />
            </NavLink>
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
             
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path} 
            
                
                    className={({ isActive }) => {
                    console.log(`Link: ${item.name}, Path: ${item.path}, isActive: ${isActive}`);
                    return `px-3 py-2 transition-colors cursor-pointer ${
                      isActive
                        ? "text-blue-600 font-medium" 
                        : "text-gray-500 hover:text-gray-900" 
                    }`;
                  }}
                  end={item.path === "/"}
                
                >
               
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
