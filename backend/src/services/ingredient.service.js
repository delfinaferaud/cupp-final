import Ingredient from '../models/Ingredient.js';

export const getIngredients = async (userId) => {
  return await Ingredient.find({
    owner: userId,
  });
};

export const getIngredientById = async (id, userId) => {
  return await Ingredient.findOne({
    _id: id,
    owner: userId,
  });
};

export const createIngredient = async (ingredient, userId) => {
  return await Ingredient.create({
    ...ingredient,
    owner: userId,
  });
};

export const updateIngredient = async (id, ingredient, userId) => {
  return await Ingredient.findOneAndUpdate(
    {
      _id: id,
      owner: userId,
    },
    ingredient,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteIngredient = async (id, userId) => {
  return await Ingredient.findOneAndDelete({
    _id: id,
    owner: userId,
  });
};