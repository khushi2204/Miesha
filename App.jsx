// src/App.jsx

import React from 'react';
import logo from './assets/logo.png';
import Aboutus from './components/Aboutus/Aboutus';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import ProductSection from './components/ProductSection/ProductSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import './index.css';

const App = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <div className="flex items-center">
            <img src={logo} alt="Mesha Logo" className="h-20 mr-2" />
            <div className="text-xxxl font-bold"></div>
          </div>
          <nav>
            <ul className="flex space-x-4 font-bold">
              <li><a href="#" className="text-gray-800 hover:text-gray-600 px-4">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600 px-4">About Us</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600 px-4">Products</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600 px-4">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
     
      <HeroSection />
      <Aboutus/>
      <ProductSection />
      <TestimonialSection />
      <Footer />

    </div>
  );
};

export default App;
