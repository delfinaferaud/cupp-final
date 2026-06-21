import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
        },
        measure: {
            type: String, 
            required: true,
            enum: ["g", "kg", "ml", "l", "unidad"]
        }, 
        price: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Ingredient", ingredientSchema);