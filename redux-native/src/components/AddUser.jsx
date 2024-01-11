export const AddUser = () => {

    const clickHandler = () => {
        const id = Math.random();
        const newUser = {
            id,
            title: 'user-' + id,
         }

         console.log(newUser);
    }
    return (
        <div className="add-user">
          <button onClick={ clickHandler }>add user</button>  
        </div>
    );
};

