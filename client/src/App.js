
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Website/Cart';
import Home from './Component/Website/Home';

import Checkout from './Component/Website/Checkout';

import Registration from './Component/Website/Registration';
import Payment from './Component/Website/PaymentN';
import Login from './Component/Website/Login';
import Wishlist from './Component/Website/Wishlist';
import FAQ from './Component/Website/FAQ';
import ContactUs from './Component/Website/ContactUs';
import AboutUs from './Component/Website/AboutUs';
import AdsBar from './Component/Home/AdsBar';
import { Navbar } from '@material-tailwind/react';
import { useState } from 'react';
import Footer from './Component/Website/Footer';
import Navbar2 from './Component/Website/Navbar2';
import Profile from './Component/Website/Profile';
import Product from './Component/Website/ProductPages';
import Details from './Component/Website/Details';




function App() {

  const [cartItems, setCartItems] = useState([]);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

 


  return (
    <div className="App">
     <AdsBar/>
   
     <Navbar2 cartItems={cartItems} onToggleMobileNav={toggleMobileNav} totalAmount={totalAmount}/>
     {isMobileNavOpen && <div className="overlay" onClick={toggleMobileNav} />}
   
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        
          
          <Route path='/cart' element={<Cart/>}/>
          {/* <Route path='/checkout/:id' element={<Checkout/>}/> */}
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/favorite' element={<Wishlist/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/productDetails' element={<Product/>}/>
          <Route path="/Details/:Params" element={<Details />} />
       
          
           
        </Routes> <Footer/>
      </Router>
    
     
    </div>
  );
}

export default App;
