import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscBellDot } from 'react-icons/vsc';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='flex justify-between items-center p-4'>
        <span className='text-pink-600 font-bold'>Joshua "LIlac" Jonas</span>
      <div className='hidden md:flex space-x-4'>
        <Link to='/'>About Me</Link>
        <Link to='/explore'>Portfolio</Link>
        <Link to='/create'>Contact</Link>
        <Link to='/profile'>Resume</Link>
        <VscBellDot className='text-pink-600 hover:animate-bounce' />
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-2xl'>
          &#9776;
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden fixed inset-0 bg-black z-10'>
          <div className='flex flex-col items-center pt-20'>
            <Link to='/' onClick={closeMenu} className='mb-4'>
              About Me
            </Link>
            <Link to='/portfolio' onClick={closeMenu} className='mb-4'>
              Portfolio
            </Link>
            <Link to='/contact' onClick={closeMenu} className='mb-4'>
              Contact
            </Link>
            <Link to='/resume' onClick={closeMenu} className='mb-4'>
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;