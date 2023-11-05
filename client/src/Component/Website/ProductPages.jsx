
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Buttonup from './Buttonup';

const Product = () => {
  const [product_target, setproduct_target] = useState('');
  const [product_type, setproduct_type] = useState('');
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage] = useState(6); // Number of items to display per page
  

  console.log(products)
  useEffect(() => {
    // استرداد البيانات من API عند تحميل المكون
    axios.get('http://localhost:3001/Data')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('حدث خطأ في جلب البيانات: ', error));
      console.log(products)

  }, []); // المصفوفة الفارغة تجعل الطلب يتم مرة واحدة عند التحميل الأول فقط



  const filteredProducts = products.filter((product) => {
    if (product_target === 'Men' || product_target === 'Women' || product_target === 'Children') {
      return (
        product.product_target === product_target &&
        (product_type === '' || product.product_type === product_type)
      );
    }
    return true; // عرض جميع المنتجات عندما تكون الفئة غير محددة.
  });

//   Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
    <div>
        
      <div className="text-center p-10 mt-20">
        <h1 className="font-bold text-4xl mb-4">Clothes</h1>
      </div>
      <div className="text-center">
<div className="mb-4">
  <label htmlFor="categorySelect" className="block font-medium text-lg text-gray-600 mb-2">
    Select Category:
  </label>
  <select
    id="categorySelect"
    value={product_target}
    onChange={(e) => setproduct_target(e.target.value)}
    className="block w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
  >
    <option value="#">Select</option>
    <option value="Men">Men</option>
    <option value="Women">Women</option>
    <option value="Children">Children</option>
  </select>
</div>

        {product_target === 'Men' || product_target === 'Women' || product_target === 'Children' ? (
   <div className="mb-4">
   <label htmlFor="subcategorySelect" className="block font-medium text-lg text-gray-600 mb-2">
     Select Subcategory:
   </label>
   <select
     id="product_typeSelect"
     value={product_type}
     onChange={(e) => setproduct_type(e.target.value)}
     className="block w-full p-2 border border-orange-300 rounded-md text-gray-700 focus:ring focus:ring-indigo-300 focus:outline-none"
   >
     <option value="">All</option>
     {product_target === 'Men' && (
       <>
         <option value="Pants">Pants</option>
         <option value="Shirts">Shirts</option>
         <option value="Jackets">Jackets</option>
       </>
     )}
     {product_target === 'Women' && (
       <>
         <option value="Pants">Pants</option>
         <option value="Shirts">Shirts</option>
         <option value="Jackets">Jackets</option>
       </>
     )}
     {product_target === 'Children' && (
       <>
         <option value="Pants">Pants</option>
         <option value="Shirts">Shirts</option>
         <option value="Jackets">Jackets</option>
       </>
     )}
   </select>
 </div>
 
        ) : null}
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {currentItems.map((product, index) => (
          <div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
         

            <Link to = {`/Details/${product.product_id}`} >
                
              <img
                src={product.imageUrl[0]}
                alt={product.product_name}
                className="h-80 w-72 object-cover rounded-t-xl"
                
              />
                <button id='laith' className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
              
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.product_name}
                </p>
                <p className="text-lg  text-black truncate block capitalize">
                  {product.product_subDescription}
                </p>
             
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${product.product_price}
                  </p>
                  
                    {/* <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {product.product_rate}
                    </p>  */}
                    
              
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      {/* أضف مسار SVG الخاص بك هنا */}
                    </svg>
                    
                  </div>
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
              </div>
            </Link>
            
          </div>
          
        ))}
      </section>
           {/* Pagination controls */}
           <div className="text-center">
        <ul className="flex justify-center">
          {Array(Math.ceil(filteredProducts.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li key={index}>
                <button
                  className={`p-2 mx-2 rounded-lg ${
                    currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-orange-300 text-gray-700'
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <Buttonup/>
 
    </div>
    
  );
};

export default Product;


















