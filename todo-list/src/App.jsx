import './App.css';
import { TodoItem } from './components/TodoItem';

const App =() =>{
  return (
    <div className="App">
     <h1>Todo list app</h1>

     <div className="todo-list-app">
      <ul className="todo-list">

       <TodoItem index={ 1 } text="todo1 some text..."/>
       <TodoItem index={ 2 } text="todo2 some text..."/>
       <TodoItem index={ 3 } text="todo3 some text..."/>
       <TodoItem index={ 4 } text="todo4 some text..."/>

      </ul>

     </div>
    </div>
  );
}

export default App;
