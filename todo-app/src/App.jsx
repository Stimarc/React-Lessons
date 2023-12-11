import  { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [newTodo, setNewTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
   
  }, []); 
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

   
    setTodos([...todos, { id: todos.length + 1, body: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggleCompleted = (id, completed) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h2>Список завдань</h2>

      <div className="todo-app">
        <div className="todo-add-form">
          <input
            type="text"
            placeholder="Додати нове завдання"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Додати завдання</button>
        </div>

        <div className="todo-actions">
          <label>
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
            />
            Показувати тільки виконані
          </label>
        </div>

        <div className="todo-list">
          <h3 className="todo-list__title">Список завдань</h3>

          <ul className="todo-list__content">
            {todos.length ? (
              todos
                .filter((todo) => (showCompleted ? true : !todo.completed))
                .map((todo) => (
                  <li
                    key={todo.id}
                    onClick={() => handleToggleCompleted(todo.id, todo.completed)}
                    style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
                  >
                    {todo.body}
                  </li>
                ))
            ) : (
              <p>Список завдань порожній</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
