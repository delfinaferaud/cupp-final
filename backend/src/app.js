import express from "express";
import cors from "cors";
import ingredientRoutes from "./routes/ingredient.routes.js";
import productRoutes from "./routes/product.routes.js";
import authRoutes from './routes/auth.routes.js';

const app = express(); 

app.use(cors());
app.use(express.json());
app.use("/api/ingredients", ingredientRoutes); 
app.use("/api/products", productRoutes); 
app.use("/api/auth", authRoutes); 

export default app;
