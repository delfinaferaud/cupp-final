import mongoose from 'mongoose';

const productIngredientSchema = new mongoose.Schema(
  {
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
      required: [true, 'El ingrediente es obligatorio'],
    },

    quantityNeeded: {
      type: Number,
      required: [true, 'La cantidad necesaria es obligatoria'],
      min: [0.01, 'La cantidad debe ser mayor a 0'],
    },

    measureNeeded: {
      type: String,
      required: [true, 'La unidad de medida es obligatoria'],
      enum: {
        values: ['g', 'kg', 'ml', 'l', 'unidad'],
        message: 'Unidad de medida inválida',
      },
    },
  },
  { _id: false },
);

export default productIngredientSchema; 