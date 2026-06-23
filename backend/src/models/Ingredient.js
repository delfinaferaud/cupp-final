import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'La cantidad es obligatoria'],
      min: 0,
    },
    measure: {
      type: String,
      required: true,
      enum: ['g', 'kg', 'ml', 'l', 'unidad'],
    },
    price: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: [0, 'No puede ser negativo'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Ingredient', ingredientSchema);
