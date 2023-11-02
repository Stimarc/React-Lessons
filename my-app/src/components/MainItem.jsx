export const MainItem = ({id,index,text,delTodo}) => {

    return (
        <li className="main-item">
                <span className="main-item__part">{ index }</span>
                <span className="main-item__part">
                </span>
                <p className="main-item__part">{ text }</p>

                <button
                onClick={ () => delTodo(id) } 
                className="main-item__part"
                >
                  del
                </button>

            </li>
    );
};

