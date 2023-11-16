import { useState } from 'react';
import { Products } from './components/Products';
import { CartBtn ,Logo } from './components/commons/index.js';
import { cart } from './components/cart';



const App = () => {

   const products = [
    {id:1,title:"Product 1",price:10890,img:"p1.webp"},
    {id:2,title:"Product 2",price:15720,img:"p2.webp"},
    {id:3,title:"Product 3",price:9876,img:"p3.webp"},
   ];

   const [cart, setCart] = useState([]);

   const addToCart = (id) => {
    setCart([...cart,id]);
   }

   console.log(cart);

  return (
   <div className='Container'>
    
    <div className="header">
     <Logo />
     <CartBtn productCount={ cart.length }/>
     
    </div>
    <div className="main">

      <Products data={products} addToCartHandler={ addToCart } />

    </div>


    <div className="footer"></div>

<cart/>

   </div>

  );

  
}

export default App;
