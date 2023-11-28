import styles from './CartBtn.module.css';
import icon from './cart.png';

export const CartBtn = ({ productsCount , ...props }) => {
  const { cart, img } = styles;

  return (
    <div className={ cart } {...props }>
      <div className={ img } data-count={ productsCount }>
        <img src={ icon } alt="cart icon" />
      </div>
    </div>
  );
};
