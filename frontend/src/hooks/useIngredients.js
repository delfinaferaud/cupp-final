import { useIngredientsContext } from '../context/IngredientsContext';

export function useIngredients() {
  return useIngredientsContext();
}