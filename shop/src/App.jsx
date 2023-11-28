import { useState } from 'react';
import { Products } from './components/Products';
import { CartBtn, Logo } from './components/commons';
import { Cart } from './components/cart';
import { getCartProductQty } from './utils';

const App = () => {

  const products = [
    { id: 1, title: 'Product 1', price: 10890, img: 'p1.webp' },
    { id: 2, title: 'Product 2', price: 15720, img: 'p2.webp' },
    { id: 3, title: 'Product 3', price: 9876, img: 'p3.webp' },
  ];


  const [openCart,setOpenCart] = useState(true);
  const [cart, setCart] = useState({});
  const [countCartItems, setCountCartItems] = useState(0)

  const addToCart = (id) => {
     let cartObj = {};

    if (!cart[id]) {
      cartObj = {...cart, [id]: 1}; 
    } else {
      const prevCount = cart[id];
      cartObj = {...cart,[id]: prevCount + 1};
    }

    getCartProductQty(cartObj);
    setCart(cartObj);
    
  }

  return (
    <div className="container">

      <div className="header">
        <Logo />
        <CartBtn productsCount={countCartItems} onClick={ () => setOpenCart(prev => !prev) } />
      </div>

      <div className="main">

        <Products data={products} addToCartHandler={addToCart} />

      </div>
      <div className="footer"></div>

       { openCart && <Cart data={ cart }  /> }
       
    </div>
  );
}

export default App;
