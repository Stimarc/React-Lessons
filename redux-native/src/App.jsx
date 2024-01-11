import { AddUser } from "./components/AddUser";
import MainInfo from "./components/MainInfo";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="container">
    <h1>Redux Native (useReducer + useContext)</h1>

    <div className="users-app">
       <MainInfo />
        <AddUser />
         <Users />
    </div>

    </div>
  );
}

export default App;
