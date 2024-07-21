import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../../index.css'; // Ensure this includes Tailwind CSS

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between mb-8">
          {/* Address */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">ADDRESS</h3>
            <p>Bangalore 560018</p>
            <p>JP Nagar Ext 23</p>
            <p className="mt-4">+91 89769 23467</p>
            <p className="mt-4">mieshaexports@gmail.com</p>
          </div>
          
          {/* Products */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">PRODUCTS</h3>
            <ul>
              <li className="mb-2">Fruits</li>
              <li className="mb-2">Dal</li>
              <li className="mb-2">Spices</li>
              <li className="mb-2">Chillies</li>
              <li className="mb-2">Rice</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul>
              <li className="mb-2">Home</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <form className="flex">
              <input
                type="email"
                className="p-2 rounded-l-lg focus:outline-none"
                placeholder="Email"
              />
              <button
                type="submit"
                className="bg-customGold text-white p-2 rounded-r-lg hover:bg-customGold-dark"
              >
                &gt;
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Lorem Ipsum. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-customGold hover:text-customGold-dark">
              <FaFacebookF />
            </a>
            <a href="#" className="text-customGold hover:text-customGold-dark">
              <FaInstagram />
            </a>
            <a href="#" className="text-customGold hover:text-customGold-dark">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
