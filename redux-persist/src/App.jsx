import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import './index.css'


const App = () => {
  return (
    <div className="App">
      <h1>Redux Persist</h1>

      <AddTodo />
      <TodoList />

    </div>
  );
}


export default App;