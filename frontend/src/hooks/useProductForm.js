import { useEffect, useMemo, useState } from 'react';
import { getIngredients } from '../services/ingredientService';
import { calculateProductCost } from '../utils/productCalculations';
import { calculateProfitMargin, calculateSalePrice } from '../utils/pricing';

const buildInitialForm = (initialValues) => ({
  product: initialValues?.product ?? '',
  category: initialValues?.category ?? 'Tortas',
  salePrice: initialValues?.salePrice ?? '',
  profitMargin: '',
  ingredients:
    initialValues?.ingredients?.map((item) => ({
      ingredient: item.ingredient?._id ?? item.ingredient ?? '',
      quantityNeeded: item.quantityNeeded ?? '',
      measureNeeded: item.measureNeeded ?? 'g',
    })) ?? [],
});

const formatBackendErrors = (error) => {
  const backendErrors = error.response?.data?.errors;
  const formatted = {};

  if (backendErrors) {
    Object.keys(backendErrors).forEach((key) => {
      formatted[key] = backendErrors[key]?.message || backendErrors[key];
    });
  }

  return formatted;
};

const buildPayload = (form) => ({
  product: form.product,
  category: form.category,
  salePrice: form.salePrice === '' ? undefined : Number(form.salePrice),
  ingredients: form.ingredients.map((item) => ({
    ingredient: item.ingredient || undefined,
    quantityNeeded:
      item.quantityNeeded === '' ? undefined : Number(item.quantityNeeded),
    measureNeeded: item.measureNeeded || undefined,
  })),
});

export function useProductForm({ initialValues, onSubmit }) {
  const [errors, setErrors] = useState({});
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [priceSource, setPriceSource] = useState(
    initialValues?.salePrice ? 'price' : 'margin',
  );

  const [form, setForm] = useState(() => buildInitialForm(initialValues));

  useEffect(() => {
    const loadIngredients = async () => {
      try {
        const data = await getIngredients();
        setAvailableIngredients(data);
      } catch (error) {
        console.error('Error al obtener ingredientes:', error);
      }
    };

    loadIngredients();
  }, []);

  useEffect(() => {
    setForm(buildInitialForm(initialValues));
    setPriceSource(initialValues?.salePrice ? 'price' : 'margin');
  }, [initialValues]);

  const productCost = useMemo(() => {
    return calculateProductCost(form.ingredients, availableIngredients);
  }, [form.ingredients, availableIngredients]);

  useEffect(() => {
    if (!productCost) return;

    setForm((prev) => {
      if (priceSource === 'margin' && prev.profitMargin !== '') {
        return {
          ...prev,
          salePrice: calculateSalePrice(productCost, prev.profitMargin),
        };
      }

      return prev;
    });
  }, [productCost, priceSource]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddIngredient = () => {
    setForm((prev) => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        {
          ingredient: '',
          quantityNeeded: '',
          measureNeeded: 'g',
        },
      ],
    }));
  };

  const handleIngredientChange = (index, field, value) => {
    setForm((prev) => {
      const updatedIngredients = [...prev.ingredients];

      updatedIngredients[index] = {
        ...updatedIngredients[index],
        [field]: value,
      };

      return {
        ...prev,
        ingredients: updatedIngredients,
      };
    });
  };

  const handleRemoveIngredient = (index) => {
    setForm((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleProfitMarginChange = (e) => {
    const margin = e.target.value;

    setPriceSource('margin');

    setForm((prev) => ({
      ...prev,
      profitMargin: margin,
      salePrice: margin === '' ? '' : calculateSalePrice(productCost, margin),
    }));
  };

  const handleSalePriceChange = (e) => {
    const price = e.target.value;

    setPriceSource('price');

    setForm((prev) => ({
      ...prev,
      salePrice: price,
      profitMargin:
        price === '' ? '' : calculateProfitMargin(productCost, Number(price)),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrors({});

      const payload = buildPayload(form);

      await onSubmit(payload);
    } catch (error) {
      setErrors(formatBackendErrors(error));
      throw error;
    }
  };

  return {
    form,
    errors,
    availableIngredients,
    productCost,
    handleChange,
    handleAddIngredient,
    handleIngredientChange,
    handleRemoveIngredient,
    handleProfitMarginChange,
    handleSalePriceChange,
    handleSubmit,
  };
}
