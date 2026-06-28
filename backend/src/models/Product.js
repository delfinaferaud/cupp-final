import mongoose from 'mongoose';
import productIngredientSchema from './ProductIngredient.js';

const productSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
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
    salePrice: {
      type: Number,
      required: [true, 'El precio de venta es obligatorio'],
      min: [0, 'El precio de venta no puede ser negativo'],
      cast: 'El precio de venta debe ser un número',
    },
  },
  { timestamps: true },
);

export default mongoose.model('Product', productSchema);
