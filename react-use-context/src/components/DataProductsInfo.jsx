import {useProductsContext} from './../hooks'

export const DataProductsInfo = ({products}) => {
    const products = useProductsContext();

    return (
        <div>
          <h3>Product</h3>
          <ul>

           {
            products.map (product => <li key={product.id}></li>)
           }
            </ul>                     
        </div>
    );
};

