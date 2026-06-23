import { Router } from "express";
import * as productController from "../contollers/product.controller.js";
import { protect } from '../middleware/auth.middleware.js';

const router = Router(); 

router.get("/", protect, productController.getProducts);
router.get("/:id", protect, productController.getProductById); 
router.post("/", protect, productController.createProduct);
router.put("/:id", protect, productController.updateProduct);
router.delete("/:id", protect, productController.deleteProduct); 

export default router; 