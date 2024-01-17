import { useSelector } from "react-redux";

export const TodosCount = () => {
  const todos = useSelector(state => state.todosData.todos);

  return <p>Todos count: { todos.length }</p>
};
