import Ingredient from '../models/Ingredient.js';
import { getMeasureType } from './calculations.js';

export const validateRepeatedIngredients = (ingredients = []) => {
  const ingredientIds = ingredients
    .map((item) => item.ingredient)
    .filter(Boolean)
    .map(String);

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

export const validateIngredientsExist = async (ingredients = [], userId) => {
  const ingredientIds = ingredients
    .map((item) => item.ingredient)
    .filter(Boolean);

  if (ingredientIds.length === 0) return;

  const foundIngredients = await Ingredient.find({
    _id: { $in: ingredientIds },
    owner: userId,
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

export const validateCompatibleMeasuresBeforeSave = async (
  ingredients = [],
  userId
) => {
  for (const item of ingredients) {
    if (!item.ingredient) continue;

    const ingredient = await Ingredient.findOne({
      _id: item.ingredient,
      owner: userId,
    });

    if (!ingredient) continue;

    const ingredientMeasureType = getMeasureType(ingredient.measure);
    const neededMeasureType = getMeasureType(item.measureNeeded);

    if (ingredientMeasureType !== neededMeasureType) {
      const error = new Error(
        'La medida del ingrediente no es compatible con la medida necesaria'
      );

      error.statusCode = 400;
      error.errors = {
        ingredients:
          'La medida del ingrediente no es compatible con la medida necesaria',
      };

      throw error;
    }
  }
};

export const validateCompatibleMeasures = (product) => {
  product.ingredients.forEach((item) => {
    const ingredient = item.ingredient;

    if (!ingredient) return;

    const ingredientMeasureType = getMeasureType(ingredient.measure);
    const neededMeasureType = getMeasureType(item.measureNeeded);

    if (ingredientMeasureType !== neededMeasureType) {
      const error = new Error(
        'La medida del ingrediente no es compatible con la medida necesaria'
      );

      error.statusCode = 400;
      error.errors = {
        ingredients:
          'La medida del ingrediente no es compatible con la medida necesaria',
      };

      throw error;
    }
  });
};