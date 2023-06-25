import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop'
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [warning,setWarning] = useState(false);
  const [finalCartPrice,setFinalCartPrice] = useState(0);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }});

      if(isPresent){
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
        console.log("Item is already present in cart");
      }
      else {
        setCart([...cart,item]);
        
      }
      
    };
    const handleOnChangeI=(id)=>{
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          item.amount = item.amount + 1;
          return { ...item, finalPrice: item.Price * item.amount };
        }
        return item;
      });
      setCart(updatedCart);
    }
    useEffect(() => {
      // Calculate the sum of finalPrice for all items in the cart
      const totalPrice = cart.reduce((sum, item) => sum + item.finalPrice, 0);
      setFinalCartPrice(totalPrice);
    }, [cart]);
    const handleOnChangeD=(id)=>{
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          item.amount = item.amount - 1;
          return { ...item, finalPrice: item.Price * item.amount };
        }
        return item;
      });
      setCart(updatedCart);
    }
  return (
    <>
 <BrowserRouter basename="/Shop">>
      {/* <Navbar size={cart.length} /> */}
      {warning && <div className="warning">Item is already present in the cart.</div>}

      <Routes>
        <Route path="/" element={<Shop size={cart.length} handleClick={handleClick} />} />
        <Route path="/about"  element={<About size={cart.length} />} />
        <Route path="/contact" element={<Contact size={cart.length} />} />
        <Route path="/Cart" element={<Cart finalCartPrice={finalCartPrice} handleOnChangeI={handleOnChangeI} handleOnChangeD={handleOnChangeD} cart={cart} setCart={setCart}  />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
