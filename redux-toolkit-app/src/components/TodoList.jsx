import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useSelector(state => state.todosData.todos);

  return (
    <ul className="todoList">
      {
        todos.map((todo, index) => (
          <TodoItem
            key={ todo.id }
            todo={ todo }
            index={ index }
          />
        ))
      }
    </ul>
  );
};
