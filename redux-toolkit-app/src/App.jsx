import { useDispatch, useSelector } from 'react-redux';
import { InputField, TodoList, TodosCount } from './components'
import { useEffect } from 'react';
import { fetchTodos } from './store/todoSlice';

const App = () => {
  const {status, error} = useSelector(state => state.todosData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  },[dispatch]);

  return (
    <div className="App">
      <h1>Redux toolkit</h1>

      <InputField />

      <div className="todoListBlock">
        <h2>Todo list</h2>
        <TodosCount />

        { status === 'loading' && <h2>loading...</h2>}
        { error && <h2>Error:{ error }</h2>}
        { status === 'resolved' &&  <TodoList /> }
      </div>

    </div>
  );
}

export default App;
