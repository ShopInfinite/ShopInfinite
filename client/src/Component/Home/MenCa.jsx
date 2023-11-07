import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function MenCa({ onAddToCart }) {
  const [products, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllProduct")
      .then((response) => {
        console.log("API response:", response.data.data); // Log the received data
        if (response.data && typeof response.data === "object") {
          // const productsArray = Object.values(response.data);
          setProductData(response.data.data);
        } else {
          console.error("Data retrieved is not in the expected format.");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);

  const addToCart = (product) => {
    onAddToCart(product);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="py-10 bg-white">
        <Slider {...settings}>
          {products.length > 0 &&
            products.map((product, index) => (
              <div key={index} className="p-9">
              <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 duration-300">
                <a href="#">
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={product.product_image} alt="Product Photo" />
                    <div
                      style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                      }}>
                      <div className="flex items-center space-x-1.8 rounded-lg bg-orange-500 px-2 py-1 text-white">
                        <svg
                          className="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="text-sm font-bold">
                          {product.product_rate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{product.product_name}</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      {product.product_subdescription}
                    </p>
                    <div className="mt-3 flex items-end justify between">
                      <p className="text-lg font-bold text-orange-500">
                        {product.product_price}
                      </p>
                      <div
                        className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-4 py-1.5 text-white duration-100 hover-bg-orange-600"
                        onClick={() => addToCart(product)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                        <button className="text-sm">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
            ))}
        </Slider>
      </section>
    </div>
  );
}

export default MenCa;
