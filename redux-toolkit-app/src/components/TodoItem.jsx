import { useDispatch } from "react-redux";
import { removeTodo,  toggleStatus } from "../store/todoSlice";


export const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const { id, title, completed } = todo;

  return (
    <li className="todoItem">
      <span className="todoItem__number">{ index + 1 }</span>
      <input type="checkbox" checked={ completed } onChange={() => dispatch(toggleStatus(id))}/>
      <p className="todoItem__text">{ title }</p>
      <button onClick={() => dispatch(removeTodo(id))} className="todoItem__del">&times;</button>
    </li>
  );
};