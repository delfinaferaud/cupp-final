import { useCallback, useEffect, useState } from 'react';
import {
  createIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient,
} from '../services/ingredientService';

export function useIngredients() {
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

  return {
    ingredients,
    loadIngredients,
    createNewIngredient,
    editIngredient,
    removeIngredient,
  };
}