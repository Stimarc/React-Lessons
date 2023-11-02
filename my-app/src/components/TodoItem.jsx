export const TodoItem = ({id,index,text,delTodo}) => {

    return (
        <li className="todo-item">
                <span className="todo-item__part">{ index }</span>
                <span className="todo-item__part">
                    <input type="checkbox" />
                </span>
                <p className="todo-item__part">{ text }</p>

                <button
                onClick={ () => delTodo(id) } 
                className="todo-item__part"
                >
                  del
                </button>

            </li>
    );
};

