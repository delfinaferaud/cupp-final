import { getMeasureType } from "./calculations.js";
import Ingredient from '../models/Ingredient.js';

export const validateRepeatedIngredients = (ingredients = []) => {
  const ingredientIds = ingredients.map((item) => item.ingredient.toString());

  const uniqueIds = new Set(ingredientIds);

  if (ingredientIds.length !== uniqueIds.size) {
    const error = new Error(
      'No se puede repetir el mismo ingrediente en un producto',
    );
    error.statusCode = 400;
    error.errors = {
      ingredients: 'No se puede repetir el mismo ingrediente en un producto',
    };
    throw error;
  }
};

export const validateIngredientsExist = async (ingredients = []) => {
  const ingredientIds = ingredients.map((item) => item.ingredient);

  const foundIngredients = await Ingredient.find({
    _id: { $in: ingredientIds },
  });

  if (foundIngredients.length !== ingredientIds.length) {
    const error = new Error('Uno o más ingredientes no existen');
    error.statusCode = 400;
    error.errors = {
      ingredients: 'Uno o más ingredientes no existen',
    };
    throw error;
  }
};

export const validateCompatibleMeasures = (product) => {
  product.ingredients.forEach((item) => {
    const ingredient = item.ingredient;

    const ingredientMeasureType = getMeasureType(ingredient.measure);
    const neededMeasureType = getMeasureType(item.measureNeeded);

    if (ingredientMeasureType !== neededMeasureType) {
      const error = new Error(
        `La unidad de ${ingredient.name} no es compatible`
      );

      error.statusCode = 400;
      error.errors = {
        ingredients: `La unidad de ${ingredient.name} no es compatible`,
      };

      throw error;
    }
  });
};