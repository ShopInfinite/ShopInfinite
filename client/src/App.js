
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Website/Cart';
import Home from './Component/Website/Home';
import ProductDetail from './Component/Website/ProductDetail';
import Checkout from './Component/Website/Checkout';

import Registration from './Component/Website/Registration';
import Payment from './Component/Website/PaymentN';
import Login from './Component/Website/Login';
import Wishlist from './Component/Website/Wishlist';
import FAQ from './Component/Website/FAQ';
import ContactUs from './Component/Website/ContactUs';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout/:id' element={<Checkout/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/favorite' element={<Wishlist/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/ProductDetail/:id' element={  <ProductDetail/>}/>
          
           
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
