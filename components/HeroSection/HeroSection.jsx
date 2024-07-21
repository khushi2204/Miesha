import React from 'react';
import Banner from '../../assets/Banner.png';
import '../../index.css';

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 py-16 md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight md:text-6xl">
            RIGHT PRICE AT RIGHT PLACE.
            <br />
            OUR CORE VALUES ARE TRUST, TALENT AND PASSION
          </h1>
          <p className="mt-4 text-xl font-bold text-customGold">
            WE ARE TRANSFORMING CHALLENGES INTO SUCCESS.
          </p>
          <button className="button-custom flex items-center">
            READ MORE
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img src={Banner} alt="Transport & Logistics" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
