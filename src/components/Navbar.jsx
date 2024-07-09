import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from './../Img/Trashpassing.svg'


const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-black border-b-2 overflow-y-hidden top-0 left-0 w-full z-50 transition-colors duration-300 text-white">
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="lg:flex space-x-8">
          <div
            onClick={() => navigate('/')}
            className="text-[8vw] md:text-[5vw] lg:text-[4vw] over text-white w-auto       hover:cursor-pointer roboto-slab opacity-100"
          >
            <img className="h-12  w-32 ml-20 relative right-3 sm:right-0 scale-[2.3] " src={Logo} alt="" />
          </div>
        </div>
        <div className="hidden lg:flex space-x-8 mr-8 text-2xl poppins">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? "block py-2 duration-500 border-b-2 border-lime-500" : "block py-2 px-4"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to={'/mechanism'}
            className={({ isActive }) =>
              isActive ? "block py-2 border-b-2 border-lime-500" : "block py-2 px-4"
            }
          >
            MECHANISM
          </NavLink>
          <NavLink
            to={'/faq'}
            className={({ isActive }) =>
              isActive ? "block py-2 border-b-2 border-lime-500" : "block py-2 px-4"
            }
          >
            FAQ'S
          </NavLink>
          <NavLink to={'/contactus'} className="py-2 bg-lime-600 rounded-full px-3">
            CONTACT US
          </NavLink>
        </div>
        <div className="lg:hidden mt-4 mr-4 z-50 relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-20 z-40 right-0 w-full nav-gradient lg:hidden">
          <div className="flex flex-col items-center lg:items-left md:items-left py-2 ml-4 poppins">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? "block py-1 border-b-2 border-lime-500" : "block py-2 px-4"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to={'/mechanism'}
              className={({ isActive }) =>
                isActive ? "block py-1 border-b-2 border-lime-500" : "block py-2 px-4"
              }
            >
              MECHANISM
            </NavLink>
            <NavLink
              to={'/faq'}
              className={({ isActive }) =>
                isActive ? "block py-1 border-b-2 border-lime-500" : "block py-2 px-4"
              }
            >
              FAQ'S
            </NavLink>
            <NavLink
              to={'/contactus'}
              className={({ isActive }) =>
                isActive ? "block py-1 border-b-2 border-lime-500" : "block py-2 px-4"
              }
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
