import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  createIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient,
} from '../services/ingredientService';

const IngredientsContext = createContext(null);

export function IngredientsProvider({ children }) {
  const [ingredients, setIngredients] = useState([]);

  const loadIngredients = useCallback(async () => {
    const data = await getIngredients();
    setIngredients(data);
  }, []);

  useEffect(() => {
    loadIngredients();
  }, [loadIngredients]);

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
      loadIngredients,
      createNewIngredient,
      editIngredient,
      removeIngredient,
    }),
    [ingredients, loadIngredients]
  );

  return (
    <IngredientsContext.Provider value={value}>{children}</IngredientsContext.Provider>
  );
}

export function useIngredientsContext() {
  const context = useContext(IngredientsContext);

  if (!context) {
    throw new Error('useIngredientsContext debe usarse dentro de IngredientsProvider');
  }

  return context;
}
