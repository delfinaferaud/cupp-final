import { Router } from "express";
import { protect } from '../middleware/auth.middleware.js';
import * as ingredientController from "../contollers/ingredient.controller.js";

const router = Router(); 

router.get("/", protect, ingredientController.getIngredients);
router.get("/:id", protect, ingredientController.getIngredient);
router.post("/", protect, ingredientController.createIngredient);
router.put("/:id", protect, ingredientController.updateIngredient);
router.delete("/:id", protect, ingredientController.deleteIngredient);

export default router;