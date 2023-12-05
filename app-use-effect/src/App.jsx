import { useEffect , useState } from 'react';


const App = () => {
  const [count,setCount] = useState(0);
  const [activate,setActivate] =useState(false);



  useEffect(() => {
    setCount(0);
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    

    return () => {
       clearInterval(interval);
    }

    }, [activate])



  return (
    <div className="App">
      <h1>Use Effect</h1>
      <button onClick={() => setActivate(prev => !prev)} >activate/deactivate</button>
      

      { activate && <h3>{ count }</h3>    }
    </div>
  );
}

export default App;

