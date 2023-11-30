import { useEffect , useState } from 'react';


const App = () => {
  const [data, setData] = useState([]);
  const [update,seUpdate] = useState(false);

  useEffect(() => {
    console.log('useEffect');
     fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setData(json))
  }, [])

 

  return (
    <div className="App">
      <h1>Use Effect</h1>
      <button onClick={()=> seUpdate(prev => !prev)}>render({String(update)})</button>

      {
        data.map(todo => <p key={todo.id}>{todo.title}</p>)
      }

    </div>
  );
}

export default App;
