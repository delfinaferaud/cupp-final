import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'La cantidad es obligatoria'],
      min: [0, "No puede ser negativo"],
      cast: 'Por favor, ingresá un número',
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
      cast: 'Por favor, ingresá un número',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Ingredient', ingredientSchema);
