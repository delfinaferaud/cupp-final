
import { getMeasureType } from '../../../frontend/src/utils/productCalculations.js';
import Ingredient from '../models/Ingredient.js';

export const validateRepeatedIngredients = (ingredients = []) => {
  const ingredientIds = ingredients
    .map((item) => item.ingredient)
    .filter(Boolean);

  const uniqueIds = new Set(ingredientIds);

  if (ingredientIds.length !== uniqueIds.size) {
    const error = new Error(
      'No se puede repetir el mismo ingrediente en un producto'
    );

    error.statusCode = 400;
    error.errors = {
      ingredients: 'No se puede repetir el mismo ingrediente en un producto',
    };

    throw error;
  }
};

export const validateIngredientsExist = async (ingredients = []) => {
  const ingredientIds = ingredients
    .map((item) => item.ingredient)
    .filter(Boolean);

  if (ingredientIds.length === 0) return;

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

    if (!ingredient) return;

    const ingredientMeasure = ingredient.measure;
    const neededMeasure = item.measureNeeded;

    const weightMeasures = ['g', 'kg'];
    const volumeMeasures = ['ml', 'l'];

    const areBothWeight =
      weightMeasures.includes(ingredientMeasure) &&
      weightMeasures.includes(neededMeasure);

    const areBothVolume =
      volumeMeasures.includes(ingredientMeasure) &&
      volumeMeasures.includes(neededMeasure);

    const areBothUnit =
      ingredientMeasure === 'unidad' && neededMeasure === 'unidad';

    if (!areBothWeight && !areBothVolume && !areBothUnit) {
      const error = new Error(
        `La medida del ingrediente no es compatible con la medida necesaria`
      );

      error.statusCode = 400;
      error.errors = {
        ingredients: `La medida del ingrediente no es compatible con la medida necesaria`,
      };

      throw error;
    }
  });
};