import * as ingredientService from "../services/ingredient.service.js";

// const error = res.status(500).json({message: error.message});

export const getIngredients = async (req, res) => {
    try {
        const ingredients = await ingredientService.getIngredients();
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

export const getIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.getIngredientsById(req.params.id);

        if (!ingredient) {
            return res.status(404).json({
                message: "Ingredient not found"
            });
        }
        res.json(ingredient);
    } catch (error) {
        rest.status(500).json({message: error.message});
    }
};

export const createIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.createIngredient(req.body);
        res.status(201).json(ingredient);
    } catch (error) {
        rest.status(500).json({message: error.message});
    }
}

export const updateIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.updateIngredient(req.params.id, req.body);

        if (!ingredient) {
            return res.status(404).json({
                message: "Ingredient not found"
            });
        }

        res.json(ingredient);
    } catch (error) {
        rest.status(500).json({message: error.message});
    }
};

export const deleteIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.deleteIngredient(req.params.id);
        
        if (!ingredient) {
            return res.status(404).json({
                message: "Ingredient not found"
            });
        }

        res.sendStatus(204);
    } catch (error) {
        rest.status(500).json({message: error.message});
    }
}