import { Router } from "express";

import * as ingredientController from "../contollers/ingredient.controller.js";

const router = Router(); 

router.get("/", ingredientController.getIngredients);
router.get("/:id", ingredientController.getIngredient);
router.post("/", ingredientController.createIngredient);
router.put("/:id", ingredientController.updateIngredient);
router.delete("/:id", ingredientController.deleteIngredient);

export default router;