import { MainItem} from "./MainItem";

export const Main = ({ data, delTodo }) => {
    return (
    <div>
        <ul className="my-app">

         {
            data.map((todo, index) => {
                return (
                <MainItem 
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
