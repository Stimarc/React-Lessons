import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

const App =() =>{
  const [todoList,setTodoList] = useState([
     { id: 1, text: 'todo1 some text...' },
     { id: 2, text: 'todo2 some text...' },
     { id: 3, text: 'todo3 some text...' },
     { id: 4, text: 'todo4 some text...' },
  ]);

  const delTodo = (id) => {
     setTodoList(todoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
     <h1>Todo list app</h1>

     <div className="todo-list-app">

      <TodoList 
      title="todo list 1" 
      data={ todoList } 
      delTodo={ delTodo }
      />  

     </div>
    </div>
  );
}

export default App;
