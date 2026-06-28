export const convertToBaseUnit = (quantity, measure) => {
  const value = Number(quantity);

  if (!value) return 0;
  const conversions = {
    g: quantity,
    kg: quantity * 1000,
    ml: quantity,
    l: quantity * 1000,
    unidad: quantity,
  };

  return conversions[measure];
};

export const calculateProductCost = (
  productIngredients = [],
  availableIngredients = [],
) => {
  return productIngredients.reduce((total, item) => {
    if (!item.ingredient || !item.quantityNeeded) return total;

    const ingredient = availableIngredients.find(
      (availableIngredient) => availableIngredient._id === item.ingredient,
    );

    if (!ingredient) return total;

    const ingredientBaseQuantity = convertToBaseUnit(
      ingredient.quantity,
      ingredient.measure,
    );

    const neededBaseQuantity = convertToBaseUnit(
      item.quantityNeeded,
      item.measureNeeded,
    );

    if (!ingredientBaseQuantity || !neededBaseQuantity) return total;

    const unitCost = ingredient.price / ingredientBaseQuantity;
    const itemCost = unitCost * neededBaseQuantity;

    return total + itemCost;
  }, 0);
};

export const calculateIngredientCost = (item) => {
  const ingredient = item.ingredient;

  if (!ingredient) return 0;

  const ingredientBaseQuantity = convertToBaseUnit(
    ingredient.quantity,
    ingredient.measure,
  );

  const neededBaseQuantity = convertToBaseUnit(
    item.quantityNeeded,
    item.measureNeeded,
  );

  if (!ingredientBaseQuantity || !neededBaseQuantity) return 0;

  const unitCost = ingredient.price / ingredientBaseQuantity;

  return unitCost * neededBaseQuantity;
};

export const getMeasureType = (measure) => {
  const mass = ['g', 'kg'];
  const volume = ['ml', 'l'];
  const unit = ['unidad'];

  if (mass.includes(measure)) return 'mass';
  if (volume.includes(measure)) return 'volume';
  if (unit.includes(measure)) return 'unit';

  return null;
};
