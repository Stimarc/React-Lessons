import styles from './Cart.module.css';
import {CartHeader, CartProduct } from './components';

export const Cart = ({data}) => {
  const { cart, header, main, footer } = styles;

  console.log(data);


  return (
    <div className={ cart }>
      
      <CartHeader className={header} />
        
      <div className={ main }>

        <CartProduct />

      </div>

      <div className={ footer }>
        <span>total:</span>
        <span>20000</span>
      </div>
    </div>
  );
};