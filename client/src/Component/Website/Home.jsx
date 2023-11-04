

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import axios from 'axios';
import Cart from './Cart';

const Home = () => {
   

  const [data, setData] = useState([]);
  
 
  useEffect(() => {
    axios.get('http://localhost:3001/product')
    .then((response)=>{
        console.log("bb",response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);


  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {data.map((blog) => (
          <Link to={`/cart/${blog.id}`} key={blog.id}>
            <div className="m-4">
              <div className="max-w-sm p-10 h-120 w-80 m-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img src={blog.image} alt={blog.title} className="w-full h-60 " />
                <div className="p-4">
                  <h1 className="text-xl font-semibold h-20 w-60">{blog.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
   
  

    </div>
  );
};

export default Home;
