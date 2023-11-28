import { Img } from '../../../commons';
import styles from './CartProduct.module.css';
import cs from './../../components/CartCommon.module.css';

export const CartProduct = () => {
  const { product, number, name, qty, price, cost, } = styles;

  return (
    <div className={product}>
      <span className={`${number} ${cs.mr1} ${cs.number}`}>1</span>

      <Img imgName="p1.webp" className={` ${cs.mr1} ${cs.img}`} />

      <p className={`${name}${cs.mr1} ${cs.name}`}>Product 1</p>
      <div className={`${qty} ${cs.mr1} ${cs.qty}`}>
        <span>+</span>
        <span>1</span>
        <span>-</span>
      </div>
      <span className={`${price} ${cs.mr1}${cs.price} ` }>1000</span>
      <span className={`${cost} ${cs.cost}`}>1000</span>
    </div>
  );
};