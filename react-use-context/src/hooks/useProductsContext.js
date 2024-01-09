import { useContext } from "react"
import { ProductsContext } from "../context";

export const useProductsContext = () => {
  const productsContext = useContext(ProductsContext);

  return productsContext;
}