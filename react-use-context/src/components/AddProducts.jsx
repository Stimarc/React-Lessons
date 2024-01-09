import React from 'react';
import { useProductsContext } from '../hooks';

export const AddProducts = () => {
    const {setProductsData} =useProductsContext
    return (
        <button onClick={()=> setProductsData([...setProductsData,{id:5 ,title: 'products 5'}])}>
            
        </button>
    );
};

