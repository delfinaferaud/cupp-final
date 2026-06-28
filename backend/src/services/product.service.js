import Product from '../models/Product.js';
import Ingredient from '../models/Ingredient.js';
import {
  validateCompatibleMeasures,
  validateIngredientsExist,
  validateRepeatedIngredients,
} from '../utils/validations.js';
import { calculateProductCost } from '../utils/calculations.js';


export const getProducts = async (userId) => {
  const products = await Product.find({ owner: userId })
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

export const getProductById = async (id, userId) => {
  const product = await Product.findOne({
    _id: id,
    owner: userId,
  }).populate('ingredients.ingredient');

  if (!product) return null;

  validateCompatibleMeasures(product);
  const cost = calculateProductCost(product);

  return {
    ...product.toObject(),
    cost,
  };
};

export const createProduct = async (productData, userId) => {
  validateRepeatedIngredients(productData.ingredients);
  await validateIngredientsExist(productData.ingredients);

  return await Product.create({
    ...productData,
    owner: userId,
  });
};

export const updateProduct = async (id, productData, userId) => {
  if (productData.ingredients) {
    validateRepeatedIngredients(productData.ingredients);
    await validateIngredientsExist(productData.ingredients);
  }

  return await Product.findOneAndUpdate(
    {
      _id: id,
      owner: userId,
    },
    productData,
    {
      new: true,
      runValidators: true,
    }
  ).populate('ingredients.ingredient');
};

export const deleteProduct = async (id, userId) => {
  return await Product.findOneAndDelete({
    _id: id,
    owner: userId,
  });
};