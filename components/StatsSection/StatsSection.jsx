// src/components/StatsSection/StatsSection.jsx

import React from 'react';
import Facts from '../../assets/Facts.png';
import '../../index.css'; // Ensure this includes Tailwind CSS

const StatsSection = () => {
  return (
    <section
      className="bg-contain bg-no-repeat bg-center py-10 px-10 min-h-screen"
      style={{ backgroundImage: `url(${Facts})` }}
    >
      {/* Your content goes here */}
    </section>
  );
};

export default StatsSection;
