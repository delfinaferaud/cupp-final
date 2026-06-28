import { FaChevronDown, FaTrash } from 'react-icons/fa6';
import { useProductForm } from '../../hooks/useProductForm';
import { formatPercentage, formatPrice } from '../../utils/pricing';

function ProductsForm({ onClose, onSubmit, initialValues }) {
  const {
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
  } = useProductForm({ initialValues, onSubmit });

  return (
    <form onSubmit={handleSubmit}>
      <div className="pb-9 px-10">
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label
              htmlFor="product"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Producto*
            </label>

            <div className="mt-2">
              <input
                type="text"
                id="product"
                name="product"
                value={form.product}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#334C68] sm:text-sm/6"
              />

              {errors.product && (
                <p className="text-red-500 text-sm mt-1">{errors.product}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="category"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Categoría*
            </label>

            <div className="mt-2 grid grid-cols-1">
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="Tortas">Tortas</option>
                <option value="Postres">Postres</option>
                <option value="Cookies">Cookies</option>
                <option value="Budines">Budines</option>
              </select>
              <FaChevronDown
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />

              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm/6 font-medium text-gray-900">
                Ingredientes*
              </h3>

              <button
                type="button"
                onClick={handleAddIngredient}
                className="rounded-md bg-[#B9C6B2] px-3 py-2 text-sm font-semibold text-[#334C68] hover:bg-[#a8b89f]"
              >
                Agregar ingrediente
              </button>
            </div>

            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>
            )}

            <div className="mt-4 space-y-4">
              {form.ingredients.length === 0 && (
                <div className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-center text-sm text-gray-500">
                  Todavía no agregaste ingredientes.
                </div>
              )}

              {form.ingredients.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 gap-4 rounded-xl bg-[#F6F1ED] p-4 sm:grid-cols-12"
                >
                  <div className="sm:col-span-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Ingrediente
                    </label>

                    <div className="relative mt-2">
                      <select
                        value={item.ingredient}
                        onChange={(e) =>
                          handleIngredientChange(
                            index,
                            'ingredient',
                            e.target.value,
                          )
                        }
                        className="w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#334C68]"
                      >
                        <option value="">Seleccionar</option>

                        {availableIngredients.map((ingredient) => (
                          <option key={ingredient._id} value={ingredient._id}>
                            {ingredient.name}
                          </option>
                        ))}
                      </select>

                      <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>

                    {errors[`ingredients.${index}.ingredient`] && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors[`ingredients.${index}.ingredient`]}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Cantidad
                    </label>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.quantityNeeded}
                      onChange={(e) =>
                        handleIngredientChange(
                          index,
                          'quantityNeeded',
                          e.target.value,
                        )
                      }
                      className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#334C68]"
                    />

                    {errors[`ingredients.${index}.quantityNeeded`] && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors[`ingredients.${index}.quantityNeeded`]}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Medida
                    </label>

                    <div className="relative mt-2">
                      <select
                        value={item.measureNeeded}
                        onChange={(e) =>
                          handleIngredientChange(
                            index,
                            'measureNeeded',
                            e.target.value,
                          )
                        }
                        className="w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#334C68]"
                      >
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="ml">ml</option>
                        <option value="l">l</option>
                        <option value="unidad">unidad</option>
                      </select>

                      <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>

                    {errors[`ingredients.${index}.measureNeeded`] && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors[`ingredients.${index}.measureNeeded`]}
                      </p>
                    )}
                  </div>

                  <div className="flex items-end sm:col-span-1">
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className="flex h-10 w-10 items-center justify-center rounded-md text-red-600 hover:bg-red-200"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#E6DDD7] p-5 sm:grid-cols-3">
                <div className="mx-auto flex w-full max-w-42.5 flex-col">
                  <label className="flex h-12 items-start text-sm font-medium text-gray-900">
                    Costo calculado
                  </label>

                  <div className="flex h-12 items-center rounded-md bg-white px-4 text-sm font-semibold text-[#334C68]">
                    ${productCost ? productCost.toFixed(2) : 0}
                  </div>
                </div>

                <div className="mx-auto flex w-full max-w-42.5 flex-col">
                  <label
                    htmlFor="profitMargin"
                    className="flex h-12 items-start text-sm font-medium text-gray-900"
                  >
                    Margen de ganancia %
                  </label>

                  <input
                    id="profitMargin"
                    name="profitMargin"
                    type="number"
                    step="0.01"
                    min="0"
                    value={form.profitMargin}
                    onChange={handleProfitMarginChange}
                    className="h-12 w-full rounded-md bg-white px-4 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#334C68]"
                  />
                </div>

                <div className="mx-auto flex w-full max-w-42.5 flex-col">
                  <label
                    htmlFor="salePrice"
                    className="flex h-12 items-start text-sm font-medium text-gray-900"
                  >
                    Precio de venta*
                  </label>

                  <input
                    id="salePrice"
                    name="salePrice"
                    type="number"
                    step="0.01"
                    min="0"
                    value={form.salePrice}
                    onChange={handleSalePriceChange}
                    className="h-12 w-full rounded-md bg-white px-4 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#334C68]"
                  />
                  {errors.salePrice && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.salePrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F1ED] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-[#334C68] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#536a86] sm:ml-3 sm:w-auto"
        >
          Guardar
        </button>

        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default ProductsForm;
