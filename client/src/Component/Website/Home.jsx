import React, { useState, useEffect } from 'react';
import Hero from '../Home/Hero';
import CircleSection from '../Home/CircleSection';
import BestSaler from '../Home/BestSaler';
import Ofu from '../Home/Ofu';
import Sale from '../Home/Sale';
import SaleCa from '../Home/SaleCa';
import BarAds from '../Home/BarAds';
import MenCa from '../Home/MenCa';
import Men from '../Home/Men';
import Opcastm from '../Home/opcastm';
import Navbar from './Navbar';
import BestCa from '../Home/BestCa';

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    const price = parseFloat(product.price.replace('$', ''));
    setTotalAmount(totalAmount + price);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item !== product);
    setCartItems(updatedCart);
    const price = parseFloat(product.price.replace('$', ''));
    setTotalAmount(totalAmount - price);
  };

  const productData = [
    {
      name: 'Adobe Photoshop CC 2022',
      location: 'Lisbon, Portugal',
      price: '$850',
      image: 'https://api.vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/b/1/b184dd94-6697-4b6a-b638-5451e806be3a.jpg',
      rating: 4.9,
    },
    {
      name: 'Adobe Photoshop CC 2022',
      location: 'Lisbon, Portugal',
      price: '$850',
      image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/7/c/7c1a7bee-f7bc-4710-9a9b-4916182e96db.jpg',
      rating: 4.7,
    },
    {
      name: 'Adobe Photoshop CC 2022',
      location: 'Lisbon, Portugal',
      price: '$850',
      image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/e/2/e2d5b42d-4dca-41f2-acf1-7523ce508f1f_1.jpg',
      rating: 4.8,
    },
    {
      name: 'Adobe Photoshop CC 2022',
      location: 'Lisbon, Portugal',
      price: '$850',
      image: 'https://vogacloset.com/media/catalog/product/cache/9ced9e932eccb8f1c13bc25346708271/9/1/91077e8a-b070-4f22-a924-0a63029900d0.jpg',
      rating: 4.6,
    },
  ];

  const handleTokenCheck = () => {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    const tokenCookie = cookies.find((cookie) => cookie.startsWith('token'));

    if (tokenCookie) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  };

  console.log("message: ",{isUserLoggedIn});

  useEffect(() => {
    handleTokenCheck();
  }, []);

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        onToggleMobileNav={toggleMobileNav}
        totalAmount={totalAmount}
        isUserLoggedIn={isUserLoggedIn}
      />
      {isMobileNavOpen && <div className="overlay" onClick={toggleMobileNav} />}
      <Hero />
      <CircleSection />
      <BestSaler />
      <BestCa
        products={productData}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
      <br></br>
      <Ofu />
      <Sale />
      <SaleCa />
      <BarAds />
      <Men />
      <MenCa
        products={productData}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
      <Opcastm />
    </div>
  );
}

export default Home;
