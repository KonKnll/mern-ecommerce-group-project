import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('api/products');
        console.log('\nContext all products:', data.products.length);
        setProducts(data.products);
        setIsLoading(false);
      } catch (err) {
        console.log('\nProducts fetch ERROR: ', err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};
