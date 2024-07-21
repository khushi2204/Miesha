// src/components/ProductSection/ProductSection.jsx

import React from 'react';
import chillies from '../../assets/chillies.png';
import dal from '../../assets/dal.png';
import fruits from '../../assets/fruits.png';
import rice from '../../assets/rice.png';
import spices from '../../assets/spices.png';

import '../../index.css'; // Ensure this includes Tailwind CSS
const products = [
  { id: 1, title: 'Fruits', image: fruits },
  { id: 2, title: 'Dal', image:dal },
  { id: 3, title: 'Chillies', image: chillies },
  { id: 4, title: 'Spices', image: spices },
  { id: 5, title: 'Rice', image: rice },
];

const ProductSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">EXPLORE OUR PRODUCTS</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full px-5 py-6 object-contain" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <button className="bg-customGold text-white px-4 py-2 mt-4 rounded-lg hover:bg-customGold-dark">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
