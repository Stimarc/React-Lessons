import { TodoItem} from "./TodoItem";

export const TodoList = ({ title, data, delTodo }) => {
    return (
    <div>
        <h2>{ title }</h2>
        <ul className="todo-list">

         {
            data.map((todo, index) => {
                return (
                <TodoItem 
                key={todo.id} 
                id={todo.id}
                index={ index + 1 } 
                text={ todo.text } 
                delTodo={delTodo}
                />
                )
            })
         }

        </ul>
    </div>
 );
};
