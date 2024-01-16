import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const AddUser = () => {
  const { dispatch } = useContext(UserContext);

  const clickHandler = () => {
    const id = Math.random();
    const newUser = {
      id,
      title: 'user-' + id,
    }

    dispatch({ type: 'ADD_USER', user: newUser });
  }

  return (
    <div className="add-user">
      <button onClick={clickHandler}>add user</button>
    </div>
  );
};