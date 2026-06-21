import express from "express";
import cors from "cors";
import ingredientRoutes from "./routes/ingredient.routes.js";

const app = express(); 

app.use(cors());
app.use(express.json());
app.use("/api/ingredients", ingredientRoutes); 

export default app;
