import Product from '../models/Product.js';
import Ingredient from '../models/Ingredient.js';
import {
  validateCompatibleMeasures,
  validateIngredientsExist,
  validateRepeatedIngredients,
} from '../utils/validations.js';
import { calculateProductCost } from '../utils/calculations.js';

export const getProducts = async () => {
  const products = await Product.find()
    .populate('ingredients.ingredient')
    .sort({ createdAt: -1 });

  return products.map((product) => {
    validateCompatibleMeasures(product);
    const cost = calculateProductCost(product);

    return {
      ...product.toObject(),
      cost,
    };
  });
};

export const getProductById = async (id) => {
  const product = await Product.findById(id).populate('ingredients.ingredient');

  if (!product) return null;

  validateCompatibleMeasures(product);

  const cost = calculateProductCost(product);

  return {
    ...product.toObject(),
    cost,
  };
};

export const createProduct = async (productData) => {
  validateRepeatedIngredients(productData.ingredients);
  await validateIngredientsExist(productData.ingredients);
  return await Product.create(productData);
};

export const updateProduct = async (id, productData) => {
  if (productData.ingredients) {
    validateRepeatedIngredients(productData.ingredients);
    await validateIngredientsExist(productData.ingredients);
  }
  return await Product.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  }).populate('ingredients.ingredient');
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
