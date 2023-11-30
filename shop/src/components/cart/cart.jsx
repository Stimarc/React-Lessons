import styles from './Cart.module.css';
import {CartHeader, CartProduct } from './components';

export const Cart = ({data}) => {
  const { cart, header, main, footer } = styles;
  const products = Object.values(data);
  


  return (
    <div className={ cart }>
      
      <CartHeader className={header} />
        
      <div className={ main }>

        {
          products.map(({qty,product,cost,},index) => (
             <CartProduct
               key={ product.id }
               qty={qty}
                product={ product}
                cost={cost}
                index={index} /> 
          ))
      }


      </div>

      <div className={ footer }>
        <span>total:</span>
        <span>20000</span>
      </div>
    </div>
  );
};