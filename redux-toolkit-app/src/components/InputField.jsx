import { useDispatch } from "react-redux";
import { delTodo } from "../store/todoSlice";
import { useState } from "react";

export const InputField = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const addTodoHandler = () => {
        dispatch(delTodo(text));
        setText('');
    }

    return (
        <div className="addTodo">
            <label className="addTodo__label">
                <input 
                value={text}
                onChange={e => setText (e.target.value) } 
                className="addTodo__input" 
                type="text" />
            </label>
            <button onClick={addTodoHandler}>Add todo</button>
        </div>
    );
};

