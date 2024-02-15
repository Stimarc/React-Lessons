import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export const AddTodo = () => {
  const [text,setText] = useState('');
  const dispatch = useDispatch();

  const addTodoHandle = () => {
    dispatch(addTodo({ text }));
    setText('');
  }

    return (
        <label>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={addTodoHandle}>add</button>
        </label>
    );
};

