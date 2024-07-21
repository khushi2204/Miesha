// src/components/AboutUs/AboutUs.jsx

import React from 'react';
import Welcome from '../../assets/Welcome.png';
import '../../index.css'; // Ensure this includes Tailwind CSS

const Aboutus = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={Welcome} alt="About Us" className="w-3/4 rounded-full" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold leading-tight md:text-4xl">
            ABOUT US
          </h2>
          <p className="mt-4 text-lg font-bold text-gray-600">
            WELCOME TO MIESHA AGRO COMMODITIES
          </p>
          <p className="mt-2 text-md text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
          </p>
          <button className="button-custom flex items-center mt-4 ml-6">
            READ MORE
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
