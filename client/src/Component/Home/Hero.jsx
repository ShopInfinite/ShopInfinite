import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../App.css';

function Hero() {
  return (
    <div className="hero min-h-screen mt-20 relative">
      <img
        src="https://images.ctfassets.net/c8luxa5v52ih/6lN3Aq3a8Op1guhxQyi5v7/397699b71f5e3a0f20903668f2d1d870/Resources_sweatshirts1920.jpg?fm=webp&w=1920&q=80&fl="
        alt="Background"
        className="object-cover w-full h-full"
      />
      <div className="hero-overlay absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-6 text-white text-opacity-80">
        <h1 className="text-4xl sm:text-6xl font-bold">Welcome to our website</h1>
        <p className="text-lg sm:text-xl">Explore our fantastic collection of sweatshirts</p>
      </div>
    </div>
  );
}

export default Hero;
