import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/productService';

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    const data = await getProducts();
    setProducts(data);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const createNewProduct = async (formData) => {
    await createProduct(formData);
    await loadProducts();
  };

  const editProduct = async (id, formData) => {
    await updateProduct(id, formData);
    await loadProducts();
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    await loadProducts();
  };

  const value = useMemo(
    () => ({
      products,
      loadProducts,
      createNewProduct,
      editProduct,
      removeProduct,
    }),
    [products, loadProducts]
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProductsContext debe usarse dentro de ProductsProvider');
  }

  return context;
}
