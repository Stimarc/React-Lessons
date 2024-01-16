import {InputField, TodoList, TodosCount} from './components'

const App = () => {
  const todosCount = 4;
 

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>

      <InputField />

      <div className="todoListBlock">
      <h2>Todo list</h2>
      <TodosCount count={todosCount} />
      <TodoList />
    </div>

    </div>
  );

}

export default App;

