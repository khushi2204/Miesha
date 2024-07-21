import React from 'react';
import annette from '../../assets/annette.png';
import leslie from '../../assets/leslie.png'; // Import images appropriately
import ralph from '../../assets/ralph.png';
import '../../index.css'; // Ensure this includes Tailwind CSS

const testimonials = [
  {
    id: 1,
    name: 'LESILE ALEXANDER',
    role: 'FERRARI',
    image: leslie,
    quote: 'Aliquam porto nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullom',
  },
  {
    id: 2,
    name: 'ANNETTE BLACK',
    role: 'LOUIS VUITTON',
    image: annette,
    quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma',
  },
  {
    id: 3,
    name: 'RALPH EDWARDS',
    role: 'MITSUBISHI',
    image: ralph,
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-customGold">TESTIMONIAL</h2>
        <h3 className="text-2xl font-bold mb-8">OUR CLIENTS SAY!</h3>
        <div className="flex flex-wrap justify-center items-center">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-md rounded-lg overflow-hidden m-4 p-6 w-full sm:w-2/3 md:w-1/3 lg:w-1/4 flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4" />
              <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
              <p className="text-sm font-medium text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
