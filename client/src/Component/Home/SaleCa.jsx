import React, { useState } from 'react';

function SaleCa({ onAddToCart }) {
  const productData = [
    {
      name: 'Adobe Photoshop CC 2022',
      subdescraption: 'Lisbon, Portugal',
      price: '40',
      image: 'https://api.vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/b/1/b184dd94-6697-4b6a-b638-5451e806be3a.jpg',
      rating: 4.9,
    },
    {
      name: 'Adobe Photoshop CC 2022',
      subdescraption: 'Lisbon, Portugal',
      price: '45',
      image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/7/c/7c1a7bee-f7bc-4710-9a9b-4916182e96db.jpg',
      rating: 4.7,
    },
    {
      name: 'Adobe Photoshop CC 2022',
      subdescraption: 'Lisbon, Portugal',
      price: '15',
      image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/e/2/e2d5b42d-4dca-41f2-acf1-7523ce508f1f_1.jpg',
      rating: 4.8,
    },
    {
      name: 'Adobe Photoshop CC 2022',
      subdescraption: 'Lisbon, Portugal',
      price: '35',
      image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/9/1/91077e8a-b070-4f22-a924-0a63029900d0.jpg',
      rating: 4.6,
    },
  ];

  const addToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div>
      <section className="py-10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 p-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productData.map((product, index) => (
            <article
              key={index}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
            >
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src={product.image} alt="Product Photo" />
                  <div style={{ position: 'absolute', top: '2px', right: '2px' }}>
                    <div className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-2 py-1 text-white">
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>

                      <span className="text-sm font-bold">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-400">{product.subdescraption}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-orange-500">${product.price}</p> <del style={{fontWeight:'bold',color:'red'}}>50$</del>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SaleCa;
