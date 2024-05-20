import React, { useState } from 'react';
import close from '../../Media/close.png'
import menu from '../../Media/menu.png'

function Ham() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-black text-xl">Logo</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} id="menu-btn" className="text-black focus:outline-none">
          <img className="w-7 mr-2 rounded-sm " src={menu} alt="" />
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 text-black" id="nav-links"> // nav menu
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
      <div
        className={`fixed top-0 right-0 w-36 h-full bg-teal-400 text-black transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="p-4 flex justify-between items-center">
          <span className="text-xl">Menu</span>
          <button onClick={toggleMenu} className="text-black focus:outline-none">
          <img className="w-7 mr-2 rounded-sm " src={close} alt="" />
          </button>
        </div>
        <ul className="flex flex-col space-y-2 p-4"> // ham  menu 
          <li><a href="#home" className="block p-2 rounded hover:bg-gray-600">Home</a></li> 
          <li><a href="#services" className="block p-2 rounded hover:bg-gray-600">Services</a></li>
          <li><a href="#about" className="block p-2 rounded hover:bg-gray-600">About</a></li>
          <li><a href="#contact" className="block p-2 rounded hover:bg-gray-600">Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Ham;
