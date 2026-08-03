import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useAuth } from './AuthContext';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/productService';

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const { user, token } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error cargando productos:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!token || !user?._id) {
      setProducts([]);
      setLoading(false);
      return;
    }

    loadProducts();
  }, [token, user?._id, loadProducts]);

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
      loading,
      loadProducts,
      createNewProduct,
      editProduct,
      removeProduct,
    }),
    [products, loading, loadProducts],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProductsContext debe usarse dentro de ProductsProvider',
    );
  }

  return context;
}
