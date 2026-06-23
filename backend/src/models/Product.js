import mongoose from 'mongoose';
import productIngredientSchema from './ProductIngredient.js';

const productSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: [true, 'El nombre del producto es obligatorio'],
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Tortas', 'Cupcakes', 'Cookies', 'Budines', 'Postres', 'Otros'],
    },
    ingredients: {
      type: [productIngredientSchema],
      validate: {
        validator(value) {
          return value.length > 0;
        },
        message: 'El producto debe tener al menos un ingrediente',
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model('Product', productSchema);
