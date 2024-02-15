import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../store/todoSlice";

export const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
   const { id,text,completed } = todo;

    return (
        <li>
            <input type="checkbox" checked={ completed } onChange={() => dispatch(toggleCompleted({ id }))}/>
            <span>{ text }</span>
            <button onClick={() => dispatch(removeTodo({ id }))}>&times;</button>
        </li>
    );
};

