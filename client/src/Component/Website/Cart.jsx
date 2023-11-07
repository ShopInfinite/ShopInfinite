// import React, { useState, useEffect } from 'react';
// import basket from '../../Images/basket.png';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Cart = ({ data }) => {

//   const [cartProduct, setCartProduct] = useState([]); // Initialize product state to null

//   useEffect(() => {
//     // Fetch the product based on the id
//     axios.get('http://localhost:3001/cart')
//       .then((response) => {
//         setCartProduct(response.data);
//       })
//       .catch((error) => {
//         console.error('An error occurred:', error);
//       });
//   }, []);

//   return (
//     <div>
//      <div className="h-screen bg-gray-100 pt-20">
//   <div className='flex justify-center'> 
//     <img src={basket} alt='cart' className='h-10 mx-5' />
//     <h1 className="mb-10 text-center text-3xl font-bold">My Cart</h1>
//   </div>

//   <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//     <div className="rounded-lg md:w-2/3">
    
//         {cartProduct && cartProduct.map((product)=>( 
//             <Link to={`/ProductDetail/${product.id}`} key={product.id}> 
//         <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img
//             src={product.image}
//             alt="product-image"
//             className="w-full rounded-lg sm:w-40"
//           />
//           <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div className="mt-5 sm:mt-0">
//               <h2 className="text-lg font-bold text-gray-900">
//                 {product.title}
//               </h2>
//               <p className="mt-1 text-xs text-gray-700">{product.size}</p>
//             </div>
//             <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div className="flex items-center border-gray-100">
//                 <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-[#F5A124] hover:text-white">
//                   {" "}
//                   -{" "}
//                 </span>
//                 <input
//                   className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                   type="text"
//                   defaultValue={2}
//                   min={1}
//                 />
//                 <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-[#F5A124] hover:text-white">
//                   {" "}
//                   +{" "}
//                 </span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <p className="text-sm">{product.price} JD</p>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         </Link>
//       ) 
      
//       )}
   
//     </div>
//     {/* Sub total */}
//     <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//       <div className="mb-2 flex justify-between">
//         <p className="text-gray-700">Subtotal</p>
//         <p className="text-gray-700"> 29.99 JD </p>
//       </div>

//       <hr className="my-4" />
//       <div className="flex justify-between">
//         <p className="text-lg font-bold">Total</p>
//         <div className="">
//           <p className="mb-1 text-lg font-bold">33.98 JD</p>
//           <p className="text-sm text-gray-700">including Tax</p>
//         </div>
//       </div>
//       <button className="mt-6 w-full rounded-md bg-[#F5A124] py-1.5 font-medium text-blue-50 hover:bg--[#F5A124]">
//         Check out
//       </button>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Cart;








import React, { useState, useEffect } from 'react';
import basket from '../../images/basket.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = ({ data }) => {
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

  const handleQuantityChange = (productId, quantityChange) => {
    setCartProduct((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === productId) {
          // Create a new object with the updated quantity
          return { ...item, quantity: item.quantity + quantityChange };
        }
        return item;
      });
  
      // If you need to update the server as well, you can make an Axios request here.
      axios
        .patch(`http://localhost:3001/cart/${productId}`, {
          quantity: updatedCart.find((item) => item.id === productId).quantity,
        })
        .then((response) => {
          // Handle the successful update on the server if needed.
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
  
      return updatedCart;
    });
  };
  

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

    // Calculate subtotal and total
    let total = 0;
  
    cartProduct.forEach((product) => {
      total += product.price * product.quantity;
    });
  
   
  return (
    <div>
    
      <div className="h-screen bg-gray-100 pt-20 mt-20">
   <div className='flex justify-center'> 
       <img src={basket} alt='cart' className='h-10 mx-5' />
    <h1 className="mb-10 text-center text-3xl font-bold">My Cart</h1>
  </div>

  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div className="rounded-lg md:w-2/3">
    
      {cartProduct && cartProduct.map((product) => (
        <div key={product.id}>
        
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <Link to={`/ProductDetail/${product.id}`} > 
       
          <img
            src={product.image}
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          /> 
          </Link>
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                {product.title}
              </h2>
              <p className="mt-1 text-xs text-gray-700">{product.size}</p>
            </div>
            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
              <span
                onClick={() => handleQuantityChange(product.id, -1)}
           className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-[#F5A124] hover:text-white"
                   >
                 {" "}
               -{" "}
                 </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="text"
                  defaultValue={product.quantity}
                  min={1}
                />
                <span
                onClick={() => handleQuantityChange(product.id, 1)}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-[#F5A124] hover:text-white"
                  >
               {" "}
                  +{" "}
                  </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className='text-gray-500'>Price</p>
              <p className="text-sm"> {product.price * product.quantity} JD</p>
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
              </div>
            </div>
          </div>
        </div>
       
         
        </div>
      ))}
      {/* <div className='flex'>
        <input type="text" className=' mt-6  p-2 rounded-lg border bg-white shadow-md  md:w-1/3  mx-10' placeholder='Coupon code'/>
        <button className='mt-6  p-2 px-4 rounded-md bg-[#F5A124] py-1.5 font-medium text-blue-50 hover:bg--[#F5A124]'>Use the Coupon</button>
      </div> */}
    </div>

      {/* Sub total */}
   <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
     {/* <div className="mb-2 flex justify-between">
         <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700"> 29.99 JD </p>
      </div> */}
            <div className="text-center">Total shopping cart</div>
       <hr className='my-4'/>
       <div className="flex justify-between ">
         <p className="text-lg font-bold">Total</p>
         <div className="">
           <p className="mb-1 text-lg font-bold">{total} JD</p>
         
         </div>
       </div>
       <Link
  to="/payment"
    state= {{total}}// Replace with the correct product index
  
> 

  <button className="mt-6 w-full rounded-md bg-[#F5A124] py-1.5 font-medium text-blue-50 hover:bg--[#F5A124]">
    Check out
  </button></Link>
  
     </div>
    </div> </div> </div>
  );
};

export default Cart;







