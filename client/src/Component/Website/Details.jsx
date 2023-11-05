import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const Details = () => {
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState({});
  const { Params } = useParams(); // Retrieve the blog ID from the route parameter
  const [selectImage , setselectImage] = useState([]);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };



  useEffect(() => {
    // Make an Axios GET request to your server's API endpoint for product details
    console.log(Params)
    axios.get(`http://localhost:3001/Data?product_id=${Params}`)

      .then(response => {
        console.log("Fffff")
        // Assuming the response data has fields like 'name' and 'description'
        setProduct(response.data[0]);
        setselectImage(response.data[0].imageUrl[0])
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
      // console.log("hhhh",product)
      // console.log("jjjjj",blogId)

  }, [Params]);

  const totalPrice = (product.product_price * counter).toFixed(2);
console.log(product.imageUrl)
  return (
    <div>
      {/* Component */}
      <section className="text-gray-700 body-font overflow-hidden bg-white mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={selectImage}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.product_name}</h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.product_subDescription}</h2><br></br>
          
              <div className="flex mb-4">
              <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">{product.product_rate}</span>
          </span>
             
              </div>
              <p className="leading-relaxed"> {product.product_description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button onClick={()=>
                  {
                    setselectImage(product.imageUrl[0])
                  }}
                   className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" /> 
                  <button  onClick={()=>
                  {
                    setselectImage(product.imageUrl[1])
                  }}
                  className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button onClick={()=>
                  {
                    setselectImage(product.imageUrl[2])
                  }}
                  className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-4">
                    
                  <button
                className="border-2 border-gray-300 rounded-full w-8 h-8 focus:outline-none"
                onClick={decrementCounter}
              >
                -
              </button>
              <span className="m-3">{counter}</span>
              <button
                className="border-2 border-gray-300 ml-1 rounded-full w-8 h-8 focus:outline-none"
                onClick={incrementCounter}
              >
                +
              </button>
      </div>
                </div> 
                      {/* Counter section */}
   
              </div>
              
              <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
            ${totalPrice}
            
            </span>
            <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover-bg-red-600 rounded">
              ORDER NOW
            </button>
            
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06-1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
                </button>
                
              </div>
              <h3 id='kj' className="text-sm title-font text-gray-500 tracking-widest">
              {product.product_origin}</h3>
              <h3 id='kj' className="text-sm title-font text-gray-500 tracking-widest">
              {product.product_fabricType}</h3>
            </div>
            <Comment/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
