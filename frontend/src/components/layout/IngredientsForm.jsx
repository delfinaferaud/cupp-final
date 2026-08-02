import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { getIngredients } from '../../services/ingredientService';
import { formatPrice } from '../../utils/pricing';

function IngredientsForm({ onClose, onSubmit, initialValues }) {
  const [errors, setErrors] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onSubmit(form);
    } catch (error) {
      console.log('FULL ERROR:', error.response?.data);

      const backendErrors = error.response?.data?.errors;

      const formatted = {};

      if (backendErrors) {
        Object.keys(backendErrors).forEach((key) => {
          formatted[key] = backendErrors[key]?.message || backendErrors[key];
        });
      }

      setErrors(formatted);
    }
  };

  const [form, setForm] = useState({
    name: initialValues?.name ?? '',
    quantity: initialValues?.quantity ?? '',
    measure: initialValues?.measure ?? 'g',
    price: initialValues?.price ?? '',
  });

  useEffect(() => {
    if (initialValues) {
      setForm({
        name: initialValues.name,
        quantity: initialValues.quantity,
        measure: initialValues.measure,
        price: initialValues.price,
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pb-9 px-10">
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Ingrediente*
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="block w-full rounded-(--radius-app) bg-white px-3 py-1.5 text-base text-gray-900 shadow-[0_4px_10px_rgba(0,0,0,0.18)]
          outline-none sm:text-sm/6"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-1 sm:col-start-1">
            <label
              htmlFor="quantity"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Cantidad*
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={form.quantity}
                onChange={handleChange}
                className="block w-full rounded-(--radius-app) bg-white px-3 py-1.5 text-base text-gray-900 shadow-[0_4px_10px_rgba(0,0,0,0.18)]
          outline-none sm:text-sm/6"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="measure"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Unidad de medida*
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="measure"
                name="measure"
                value={form.measure}
                onChange={handleChange}
                className="col-start-1 row-start-1 w-full appearance-none rounded-(--radius-app) bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 shadow-[0_4px_10px_rgba(0,0,0,0.18)]
          outline-none sm:text-sm/6"
              >
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
                <option value="l">l</option>
                <option value="unidad">unidad</option>
              </select>
              <FaChevronDown
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
              {errors.measure && (
                <p className="text-red-500 text-sm mt-1">{errors.measure}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="price"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Precio*
            </label>
            <div className="mt-2">
              <input
                type="number"
                id="price"
                name="price"
                min="1"
                value={form.price}
                onChange={handleChange}
                className="block w-full rounded-(--radius-app) bg-white px-3 py-1.5 text-base text-gray-900 shadow-[0_4px_10px_rgba(0,0,0,0.18)]
          outline-none sm:text-sm/6"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F1ED] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-(--radius-app) bg-[#334C68] px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-[#536a86] sm:ml-3 sm:w-auto"
        >
          Guardar
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-(--radius-app) bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default IngredientsForm;
