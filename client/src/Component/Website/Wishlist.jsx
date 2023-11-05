import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Wishlist = () => {
    const [cartProduct, setCartProduct] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/cart')
          .then((response) => {
            setCartProduct(response.data);
          })
          .catch((error) => {
            console.error('An error occurred:', error);
          });
      }, []);


    const handleRemoveItem = (productId) => {
        // You can make an Axios request to remove the item from the cart on the server.
        axios.delete(`http://localhost:3001/cart/${productId}`)
          .then((response) => {
            // Handle the successful removal on the server if needed.
            // You can also remove the item locally from the cartProduct state.
            const updatedCart = cartProduct.filter((item) => item.id !== productId);
            setCartProduct(updatedCart);
          })
          .catch((error) => {
            console.error('An error occurred:', error);
          });
      };
    

  return (

   <>
  {/* component */}
  <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
    <div className="flex flex-col jusitfy-start items-start">
      <div className="mt-3">
        <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800  dark:text-white">
          Favourites
        </h1>
      </div>
       
      <div className="mt-4">
        <p className="text-2xl tracking-tight leading-6 text-gray-600 dark:text-white">
        {cartProduct.length} items
        </p>
      </div>
      
      <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
      {cartProduct.map((product)=>(  
        <div className="flex flex-col">
          <div className="relative">

            <img
              src={product.image}
              alt="bag"
            />
          
            <button
              aria-label="close"
              className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
            >
              <svg
              onClick={() => handleRemoveItem(product.id)}
              // Add a click event handler to call handleRemoveItem
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
            </button>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex justify-center items-center">
              <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white mr-20">
                {product.title}
              </p>
              <p className="tracking-tight leading-6 text-gray-500 dark:text-white">
               price {product.price}
              </p>
            </div>
           
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex justify-center items-center">
             
            </div>
           
          </div>
         
         
        </div>
       
       ))}
      </div>




    </div>
  </div>
</>

  )
}

export default Wishlist