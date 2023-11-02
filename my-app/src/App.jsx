import { useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Footer } from "./components/Footer";

const App =() =>{
  const [todoList,setTodoList] = useState([
     { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     { id: 6, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     { id: 7, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     { id: 8, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
     
  ]);

  const delTodo = (id) => {
     setTodoList(todoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Header />
     <h1>My app</h1>

     <div className="todo-list-app">

      <Main 
      data={ todoList } 
      delTodo={ delTodo }
      />  

     </div>

     <Footer />
    </div>
  );
}

export default App;
