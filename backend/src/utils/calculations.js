export const convertToBaseUnit = (quantity, measure) => {
  const conversions = {
    g: quantity,
    kg: quantity * 1000,
    ml: quantity,
    l: quantity * 1000,
    unidad: quantity,
  };

  return conversions[measure];
};

export const calculateProductCost = (product) => {
  return product.ingredients.reduce((total, item) => {
    const ingredient = item.ingredient;

    const ingredientBaseQuantity = convertToBaseUnit(
      ingredient.quantity,
      ingredient.measure
    );

    const neededBaseQuantity = convertToBaseUnit(
      item.quantityNeeded,
      item.measureNeeded
    );

    const unitCost = ingredient.price / ingredientBaseQuantity;
    const itemCost = unitCost * neededBaseQuantity;

    return total + itemCost;
  }, 0);
}; 

export const getMeasureType = (measure) => {
  const mass = ["g", "kg"];
  const volume = ["ml", "l"];
  const unit = ["unidad"];

  if (mass.includes(measure)) return "mass";
  if (volume.includes(measure)) return "volume";
  if (unit.includes(measure)) return "unit";

  return null;
};