import { useContext } from "react";
import { UsersContext } from "./../contexts/users/context";

const MainInfo = () => {
    const users = useContext(UsersContext)

    return (
        <div className="users-main-info">
            <h3>users count: {users.length}</h3>
        </div>
    );
};

export default MainInfo;