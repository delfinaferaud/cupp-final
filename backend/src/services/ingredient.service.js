import Ingredient from "../models/Ingredient.js";

export const getIngredients = async () => {
    return await Ingredient.find();
};

export const getIngredientsById = async (id) => {
    return await Ingredient.findById(id);
}; 

export const createIngredient = async (ingredient) => {
    return await Ingredient.create(ingredient);
};

export const updateIngredient = async (id, ingredient) => {
    return await Ingredient.findByIdAndUpdate(id, ingredient, {new: true});
};

export const deleteIngredient = async (id) => {
    return await Ingredient.findByIdAndDelete(id);
}