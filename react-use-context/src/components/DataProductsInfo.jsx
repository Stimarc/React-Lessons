import { useProductsContext } from './../hooks';

export const DataProductsInfo = () => {
  const { productsData } = useProductsContext();

  return (
    <div>
      <h3>Products</h3>
      <ul>

        {
          productsData.map( product => <li key={ product.id }>{ product.title }</li> )
        }

      </ul>
    </div>
  );
};