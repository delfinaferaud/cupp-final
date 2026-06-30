import { useCallback, useEffect, useState } from 'react';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/productService';

export function useProducts() {
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

  return {
    products,
    loadProducts,
    createNewProduct,
    editProduct,
    removeProduct,
  };
}
