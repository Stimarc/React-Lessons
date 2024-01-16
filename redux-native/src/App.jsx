import React from "react";
import { AddUser } from "./components/AddUser";
import MainInfo from "./components/MainInfo";
import Users from "./components/Users";


const App = () => {
  const roles = [];

  return (
    <div className="container">
      <h1>Redux Native (useReducer + useContext)</h1>

      <div className="users-app">
        <MainInfo />
        <AddUser />
        <Users />
      </div>

      <div className="roles">
        <h2>Roles:</h2>
        <ul>
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;