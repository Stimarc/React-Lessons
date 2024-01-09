import { DataInfo, TopLevel } from "./components";
import UserProvider from './context/UserContext';
import ProductsProvider from './context/ProductsContext';
import AddProducts from "./components/AddProducts";
import { useState } from "react";

const App = () => {
  const userInfo = {
    name: 'user',
    role: 'admin',
  }

  const [productsData, setProductsData] = useState([
    { id: 1, title: 'Product 1' }, 
    { id: 2, title: 'Product 2' }, 
    { id: 3, title: 'Product 3' }, 
    { id: 4, title: 'Product 4' }, 
  ]);

  return (
   
      <div className="App">
        <h1>Context</h1>

        <UserProvider value={ userInfo }>
          <TopLevel />
        </UserProvider>

        <ProductsProvider value={ {productsData, setProductsData} }>
          <DataInfo />
          <AddProducts />
        </ProductsProvider>

      </div>
  );
}

export default App;





