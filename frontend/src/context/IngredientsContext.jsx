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
  createIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient,
} from '../services/ingredientService';

const IngredientsContext = createContext(null);

export function IngredientsProvider({ children }) {
  const { user, token } = useAuth();
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadIngredients = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getIngredients();
      setIngredients(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error cargando ingredientes:', error);
      setIngredients([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!token || !user?._id) {
      setIngredients([]);
      setLoading(false);
      return;
    }

    loadIngredients();
  }, [token, user?._id, loadIngredients]);

  const createNewIngredient = async (formData) => {
    await createIngredient(formData);
    await loadIngredients();
  };

  const editIngredient = async (id, formData) => {
    await updateIngredient(id, formData);
    await loadIngredients();
  };

  const removeIngredient = async (id) => {
    await deleteIngredient(id);
    await loadIngredients();
  };

  const value = useMemo(
    () => ({
      ingredients,
      loading,
      loadIngredients,
      createNewIngredient,
      editIngredient,
      removeIngredient,
    }),
    [ingredients, loading, loadIngredients],
  );

  return (
    <IngredientsContext.Provider value={value}>
      {children}
    </IngredientsContext.Provider>
  );
}

export function useIngredientsContext() {
  const context = useContext(IngredientsContext);

  if (!context) {
    throw new Error(
      'useIngredientsContext debe usarse dentro de IngredientsProvider',
    );
  }

  return context;
}
