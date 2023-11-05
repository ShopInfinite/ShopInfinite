import React from 'react';

function CircleSection() {
  return (
    <div className="mt-16 flex justify-center space-x-24 ">
      <div className="w-40 h-40 relative ">
        <img
          src="https://t4.ftcdn.net/jpg/01/81/67/19/360_F_181671928_Q9ilJ8ihQ2cLL0HCFlQU8WYDqsIWRh0h.jpg"
          alt="Image 1"
          className="w-full h-full rounded-full object-cover"
        />
        <h2 className="text-center text-xl font-semibold mt-2">Sale</h2>
      </div>
      <div className="w-40 h-40 relative">
      
        <img
          src="https://api.vogacloset.com/media/contentbuilder/cache/c12002de97b17ab906e5ec660e3a5c85/Web_EN_Men_1_2x_1.webp"
          alt="Image 2"
          className="w-full h-full rounded-full object-cover"
        />
        <h2 className="text-center text-xl font-semibold mt-2">Men's</h2>
      </div>
      <div className="w-40 h-40 relative">
       
        <img
          src="https://api.vogacloset.com/media/contentbuilder/cache/c12002de97b17ab906e5ec660e3a5c85/Web_EN_Women_2x_1.webp"
          alt="Image 3"
          className="w-full h-full rounded-full object-cover"
        />
        <h2 className="text-center text-xl font-semibold mt-2">Women's</h2>
      </div>
      <div className="w-40 h-40 relative">
    
        <img
          src="https://api.vogacloset.com/media/contentbuilder/cache/ed6431113256a2daefefea786a8aa535/Web_EN_Kids_2x_1.webp"
          alt="Image 4"
          className="w-full h-full rounded-full object-cover"
        />
        <h2 className="text-center text-xxl font-semibold mt-2">Kid's</h2>
      </div>
    </div>
  );
}

export default CircleSection;
