import { useState } from "react";
import { Product } from "./components/Product";
import { useAddGoodsMutation, useDelGoodMutation, useGetGoodsQuery } from "./redux";

const App = () => {
  const [count, setCount] = useState('');
  const [text, setText] =useState('');
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addGood] = useAddGoodsMutation();
  const [delGood] = useDelGoodMutation();

  const deleteHandler = async (productId) => {
    await delGood({ id: productId }).unwrap();
  };

  const addHandler = async () => {
    if (text) {
      await addGood({name: text}).unwrap();
      setText('');
    }
   
  }

  return (
    <div className="container">
      <h1>RTK Query</h1>
      <div className="add-new">
        <input
         value={text}
         onChange={e => setText(e.target.value)}
         type="text" 
         />
        <button onClick={addHandler}>add</button>
        </div>
      <select 
      value={count}
      onChange={ e => setCount(e.target.value) }
      className="select-count">

            <option value="">all</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

      {
      isLoading && <h2>loading ...</h2>
      }

      {
      !isLoading && (
        <div className="products">
          {data.map((product) => (
            <Product key={product.id} product={product} onDelete={deleteHandler} /> 
          ))}
        </div>
      )
      }
    </div>
  );
};

export default App;