import React, { useState } from 'react';
import '../../App.css';

import { Link } from 'react-router-dom';


function Navbar2({ cartItems }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const cartItemCount = cartItems ? cartItems.length : 0;

  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price;
  }, 0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="nav">
      <nav className="w-full bg-orange-500 h-fit overflow-hidden">
        <div className="py-4 lg:px-8 px-4 max-w-7xl h-16 m-auto text-white flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <h1 className="lg:text-2xl text-xl mx-10 uppercase tracking-wider cursor-pointer font-bold">
                ShopInfinite
              </h1>
            </div>
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full lg:w-64"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white bg-orange-700 px-4 py-2 rounded-md hover:bg-orange-400"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    d="M2 3h20M2 9h20M2 15h20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center">
            {/* <Link to="/"> */}
            <a href='/'>
            <span className="group">
              Home
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
           </span></a>
           <a href='/contact'>
            <span className="group">
              Contact Us
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </span></a>
            <a href='/about'>
            <span className="group">
              About Us
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </span></a>
            {/* <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-orange-900 hover:text-gray-700">
              <a href='/cart'>
                <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg></a>
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartItemCount}
                </span>
              
            </li>
            <span className="group">
              <div className="text-black bg-orange-500  rounded-md">
                Total: ${cartTotal.toFixed(2)}
              </div>
            </span> */}
          </div>
          <a href='/login'>
          <span className="group">
            <button className="text-white bg-orange-700 px-4 py-2 rounded-md hover:bg-orange-400">
              Login / Sign up
            </button>
          </span></a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobileNav"
          className="fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-white h-full inset-0 top-16 w-full ease-in-out duration-500 cursor-pointer"
        >
         <a href="/"> <span>Home</span></a>
         <a href="/contact">  <span>Contact US</span></a>
         <a href="/about"> <span>About Us</span></a>
          <a href='/login'><button className="text-white bg-orange-700 px-4 py-2 rounded-md hover.bg-blue-600">
            Login / Sign up
          </button></a>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
