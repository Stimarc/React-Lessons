
 import styles from './CartProduct.module.css';

export const CartProduct = () => {
    const { product  } = styles;

    return (
        <div className={ product }>
        <span className="number">1</span>

        <div className="img"></div>

        <p className="productName"></p>
        <span className="qty">1</span>
        <span className="price">1000</span>
        <span className="cost">1000</span>

     </div>
    );
};

