import { InputField, TodoList, TodosCount } from './components'

const App = () => {
  return (
    <div className="App">
      <h1>Redux toolkit</h1>

      <InputField />

      <div className="todoListBlock">
        <h2>Todo list</h2>
        <TodosCount />
        <TodoList />
      </div>

    </div>
  );
}

export default App;
