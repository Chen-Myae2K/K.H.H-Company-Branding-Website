import React, { useState } from "react";
import logo from "../assets/home/logo.png"
import { Link } from "react-scroll";

const Header = () => {
  const [navList, setNavList] = useState([
    { name: "Home", current: true },
    { name: "About", current: false },
    { name: "Products", current: false },
    { name: "Track Order", current: false },
    { name: "Contact", current: false },
  ]);

  const handleNavClick = (name) => {
    
    setNavList(
      navList.map((item) => ({
        ...item,
        current: item.name === name,
      }))
    );
  };
  return (
    <div className="font-inter z-50">
      <header className="fixed top-0 left-0 w-full z-50 font-inter">
        <nav className="bg-white py-3">
          <div className="mx-auto w-[95%]  flex justify-between items-center">
            <a href="#" className="flex justify-center items-center text-zinc-800">
              <img src={logo} className="w-[70px]" alt="KHH loho" />
             
            </a>
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              {navList.map((item) => (
                <Link
                  to={item.name}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`px-3 py-2 transition-colors cursor-pointer
                  ${
                    item.current
                      ? "text-primary"
                      : "text-zinc-400 hover:text-zinc-800"
                  }
                `}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
