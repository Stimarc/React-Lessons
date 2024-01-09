import React from 'react';
import { useProductsContext } from '../hooks';

const AddProducts = () => {
  const { productsData, setProductsData } = useProductsContext();
  return (
    <button onClick={ () => setProductsData([...productsData, { id: 5, title: 'product 5' }]) }>
      add product
    </button>
  );
};

export default AddProducts;