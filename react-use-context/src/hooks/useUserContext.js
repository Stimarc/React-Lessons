import { useContext } from "react"
import { UserContext } from "../context"

export const useProductsContext = () => {
   const UserContext =useContext(UserContext)

    return userContext;
}