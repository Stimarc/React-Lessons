import { useContext } from "react";
import { UsersContext } from "./../contexts/users/context";
import { removeUser } from "../contexts/users/actions";

export const Users = () => {
    const  [users,dispatch] = useContext(UsersContext)
    
    return (
        <ul>
            
            {
                users.map(user => (
                    <li key={user.id}>
                        {Users.title}
                        <button onClick={ () => dispatch(removeUser(user)) }>x</button>
                    </li>
                ))
            }

        </ul>
    );
};

export default Users;