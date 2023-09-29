import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4 justify-between border-t border-pink-600 pt-8">
          <div className="w-full lg:w-1/3 px-4">
          <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
              <div className="flex items-center">
              <a href="https://github.com/lilac27" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 text-pink-500 hover:text-pink-600" size={24} />
              </a>
                <a href="https://www.linkedin.com/in/lilac27" target="_blank" rel="noopener noreferrer">
                  
                <FaLinkedin className="mr-2 text-pink-500 hover:text-pink-600" size={24} />
                </a>

              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>Email: jonasjosh7@gmail.com</p>
              <p>Phone: +1 (775) 777-4649</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
