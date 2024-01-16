import { useDispatch } from "react-redux";
import { delTodo, toggleCompleted } from "../store/todoSlice";

export const TodoItem = ({todo,index}) => {
    const dispatch = useDispatch();
   const  {id,text,completed} = todo;

    return (
        <li className="todoItem">
            <span className="todoItem__number">{index + 1}</span>
            <input type="checkbox" checked={completed} onChange={()=> dispatch(toggleCompleted(id))} />
            <p className="todoItem__text">{text}</p>
            <button onClick={() => dispatch(delTodo(id))} className="todoItem__del">&times;</button>
        </li>
    );
};

