import { createContext } from "react";

const initialValue ={
    name: '',
    role:'',
  };
  export const UserContext = createContext(initialValue);
  export default UserContext.Provider 