import { CartProduct } from '../CartProduct/CartProduct';
import styles from './Cart.module.css';

export const cart = () => {
   const { cart ,header ,main ,footer }= styles;

    return (
        <div className={ cart }>

            <div className={ header }>
                <h4>Products</h4>
            </div>
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

