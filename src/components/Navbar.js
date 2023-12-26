import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Toggle the isOpen state
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

    // Close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    closeMenu();
  };



  return (
    <nav className='flex justify-between items-center p-4 navbar'>
      <span className='text-white text-2xl font-bold'>Joshua "Lilac" Jonas</span>
      <div className='hidden md:flex text-lg space-x-4 text-pink-100'>
        <Link to='/' onClick={closeMenu} className='mb-4'>
          About Me
        </Link>
        <Link to='/portfolio' onClick={closeMenu} className='mb-4'>
          Portfolio
        </Link>
        <Link to='/resume' onClick={closeMenu} className='mb-4'>
          Resume
        </Link>
        <Link to='/contact' onClick={closeMenu} className='mb-4'>
          Contact
        </Link>
      </div>
      <div className='md:hidden dropdown-m text-pink-100'>
        <button onClick={toggleMenu} className='text-2xl text-pink-500'>
          {isOpen ? 'x' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden mobile-menu fixed z-10'>
          <div className='flex flex-col items-center text-white bg-black'>
            <Link to='/' onClick={handleMenuItemClick} className='menu-link'>
              About Me
            </Link>
            <Link to='/portfolio' onClick={handleMenuItemClick} className='menu-link'>
              Portfolio
            </Link>
            <Link to='/resume' onClick={handleMenuItemClick} className='menu-link'>
              Resume
            </Link>
            <Link to='/contact' onClick={handleMenuItemClick} className='menu-link'>
              Contact
            </Link>
            <button classname='text-pink-500' onClick={toggleMenu}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;