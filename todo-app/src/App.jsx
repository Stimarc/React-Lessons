import  { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

     (async () => {
      const todosRes = await fetch ('http://localhost:3000/todos');
      const todos = await todosRes.json();
      setTodos(todos);

      })()

    
  }, []);

  return (
    <div className="App">
      <h2>Todo list from API</h2>

      <div className="todo-app">
        <div className="todo-add-form"></div>
        <div className="todo-actions">
          <label>
          <input type="checkbox" name="" id="" />
          no completed
          </label>
          
        </div>

        <div className="todo-list">
          <h3 className="todo-list__title"></h3>

          <ul className="todo-list__content">
            {
               todos.length
              ? todos.map((todo, index) => <li key={todo.id}> {index + 1} {todo.body} </li>
                )
              : <p>Todo list is empty</p>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
