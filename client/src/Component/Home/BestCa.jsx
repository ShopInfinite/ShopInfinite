// import React, { useState } from 'react';


// function BestCa({ onAddToCart }) {
//     const [products, setProducts] = useState([]);


//   async function saveProductToServer(productData) {
//     try {
//       const response = await axios.post(' http://localhost:3001/favorite', productData);
//       return response.data;
//     } catch (error) {
//       alert('Failed to save data to the server:', error);
//     }
//   }

//   const addToFavorites = (product) => {
//     const productData = {
//       name: product.name,
//       // location: "product.location,
//       price: product.price,
//       image:product.image,
   
//     };

//     saveProductToServer(productData)
//       .then((savedProduct) => {
//         console.log('Product saved on the server:', savedProduct);
//       });
//   };

//   const productData = [
//     {
//       name: 'Adobe Photoshop CC 2022',
//       subdescraption: 'Lisbon, Portugal',
//       price: '$40',
//       image: 'https://api.vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/b/1/b184dd94-6697-4b6a-b638-5451e806be3a.jpg',
//       rating: 4.9,
//     },
//     {
//       name: 'Adobe Photoshop CC 2022',
//       subdescraption: 'Lisbon, Portugal',
//       price: '$50',
//       image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/7/c/7c1a7bee-f7bc-4710-9a9b-4916182e96db.jpg',
//       rating: 4.7,
//     },
//     {
//       name: 'Adobe Photoshop CC 2022',
//       subdescraption: 'Lisbon, Portugal',
//       price: '$15',
//       image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/e/2/e2d5b42d-4dca-41f2-acf1-7523ce508f1f_1.jpg',
//       rating: 4.8,
//     },
//     {
//       name: 'Adobe Photoshop CC 2022',
//       subdescraption: 'Lisbon, Portugal',
//       price: '$70',
//       image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/9/1/91077e8a-b070-4f22-a924-0a63029900d0.jpg',
//       rating: 4.6,
//     },
//   ];
  

//   const addToCart = (product) => {
//     onAddToCart(product);
//   };

//   return (
//     <div>
//       <section className="py-10 bg-white">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 p-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {productData.map((product, index) => (
//             <article
//               key={index}
//               className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
//             >
//               <a href="#">
//                 <div className="relative flex items-end overflow-hidden rounded-xl">
//                   <img src={product.image} alt="Product Photo" />
//                   <div style={{ position: 'absolute', top: '2px', right: '2px' }}>
//                     <div className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-2 py-1 text-white">
//                       <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
                      
//                       <span className="text-sm font-bold">{product.rating}</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
// </svg>

//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-1 p-2">
//                   <h2 className="text-slate-700">{product.name}</h2>
//                   <p className="mt-1 text-sm text-slate-400">{product.subdescraption}</p>
//                   <div className="mt-3 flex items-end justify-between">
//                     <p className="text-lg font-bold text-orange-500">{product.price}</p>
//                     <div
//                       className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-4 py-1.5 text-white duration-100 hover-bg-orange-600"
//                       onClick={() => addToCart(product)}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-4 w-4"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//                         />
//                       </svg>
//                       <button className="text-sm">Add to cart</button>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default BestCa;







import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BestCa({ onAddToCart ,productData}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/Data');
        const data = response.data;
        const numberOfItemsToDisplay = 4;
        const productsToDisplay = data.slice(0, numberOfItemsToDisplay);
        setProducts(productsToDisplay);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchData();
  }, []);

  const addToCart = (product) => {
    onAddToCart(product);
  };


  async function saveProductToServer(productData) {
    try {
      const response = await axios.post(' http://localhost:3001/favorite', productData);
      return response.data;
    } catch (error) {
      console.log('Failed to save data to the server:', error);
    }
  }

  const addToFavorites = (product) => {
    const productData = {
      name: product.name,
      // location: "product.location,
      price: product.price,
      image:product.image,
   
    };

    saveProductToServer(productData)
      .then((savedProduct) => {
        console.log('Product saved on the server:', savedProduct);
      });
  };

  return (
    <div>
      <section className="py-10 bg-white">
        {/* <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 p-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={index}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
            >
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src={product.image} alt="Product Photo" />
                  <div style={{ position: 'absolute', top: '2px', right: '2px' }}>
                    <div className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-2 py-1 text-white"
                    onClick={() => addToFavorites(product)}>
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l 4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <span className="text-sm font-bold">{product.rating}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-400">{product.location}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-orange-500">{product.price}</p>
                    <div
                      className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-4 py-1.5 text-white duration-100 hover-bg-orange-600"
                      onClick={() => addToCart(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                      <button className="text-sm">Add to favorites</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div> */}
      </section>
    </div>
  );
}

export default BestCa;













































































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function BestCa({ onAddToCart }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         const data = response.data;
//         setProducts(data);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   const addToCart = (product) => {
//     onAddToCart(product);
//   };

//   return (
//     <div>
//       <section className="py-10 bg-white">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 p-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {products.map((product, index) => (
//             <article
//               key={index}
//               className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
//             >
//               <a href="#">
//                 <div className="relative flex items-end overflow-hidden rounded-xl">
//                   <img src={product.image} alt="Product Photo" />
//                   <div style={{ position: 'absolute', top: '2px', right: '2px' }}>
//                     <div className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-2 py-1 text-white">
//                       <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <span className="text-sm font-bold">{product.rating}</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-1 p-2">
//                   <h2 className="text-slate-700">{product.name}</h2>
//                   <p className="mt-1 text-sm text-slate-400">{product.location}</p>
//                   <div className="mt-3 flex items-end justify-between">
//                     <p className="text-lg font-bold text-orange-500">{product.price}</p>
//                     <div
//                       className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-4 py-1.5 text-white duration-100 hover-bg-orange-600"
//                       onClick={() => addToCart(product)}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-4 w-4"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//                         />
//                       </svg>
//                       <button className="text-sm">Add to cart</button>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default BestCa;

