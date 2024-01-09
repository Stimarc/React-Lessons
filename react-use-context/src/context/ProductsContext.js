import { createContext } from "react";

const initialValue = [];

export const ProductsContext = createContext(initialValue);
export default ProductsContext.Provider;