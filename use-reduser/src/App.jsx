import { useReducer } from "react";
import {
  store,
  reducer,
  increment,
  decrement

} from "./store";


const App = () => {
  const [state,dispatch] = useReducer(reducer,store);

  return (
    <div className="container">
    <h1>useReducer</h1>

    <div className="counter"></div>
      <p>Count: { state.count }</p>
      <div className="counter-manage">
        <button onClick={ () => dispatch(decrement(2))}>-</button>
        <button onClick={ () => dispatch(increment(2))}>+</button>
      </div>
    </div>
  );
}

export default App;

