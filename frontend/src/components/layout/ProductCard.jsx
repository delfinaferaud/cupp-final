import { FaBoxArchive, FaEgg } from 'react-icons/fa6';
import ActionsButtons from '../ui/ActionsButtons';
import { useProducts } from '../../hooks/useProducts';
import { useCrudModals } from '../../hooks/useCrudModals';
import { calculateProfit, calculateProfitMargin, formatPercentage, formatPrice } from '../../utils/pricing';
import { calculateIngredientCost } from '../../utils/productCalculations';

function ProductCard({ product }) {

  const { products, createNewProduct, editProduct, removeProduct } =
    useProducts();

  const {
    selectedItem: selectedProduct,
    isCreateOpen,
    isEditOpen,
    isDeleteOpen,
    openCreate,
    openEdit,
    openDelete,
    closeModal,
  } = useCrudModals();

  return (
    <div className="overflow-hidden rounded-3xl border border-[#DDD2CB] bg-[#F2EBE6] shadow-sm">
      <div className="bg-[#E6DDD7] px-8 py-6">
        <div className="flex items-center gap-5 justify-between">
          <div className='flex gap-5 items-center'>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B8C7AF] text-[#334C68]">
              <FaBoxArchive size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#334C68]">
                {product.product}
              </h2>

              <p className="mt-1 text-sm font-semibold text-[#5B4636]">
                {product.category}
              </p>
            </div>
          </div>
          <div>
            <ActionsButtons
              onEdit={() => openEdit(product)}
              onDelete={() => openDelete(product)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 px-8 py-6 md:grid-cols-4">
        <div className="rounded-2xl bg-white px-5 py-5">
          <p className="text-sm font-medium text-gray-500">Costo unitario</p>
          <p className="mt-2 text-3xl font-bold text-[#334C68]">
            {formatPrice(product.cost)}
          </p>
        </div>

        <div className="rounded-2xl bg-white px-5 py-5">
          <p className="text-sm font-medium text-gray-500">Precio de venta</p>
          <p className="mt-2 text-3xl font-bold text-[#334C68]">
            {formatPrice(product.salePrice)}
          </p>
        </div>
        <div className="rounded-2xl bg-white px-5 py-5">
          <p className="text-sm font-medium text-gray-500">Ganancia en pesos</p>
          <p className="mt-2 text-3xl font-bold text-[#334C68]">
            {formatPrice(calculateProfit(product))}
          </p>
        </div>
        <div className="rounded-2xl bg-white px-5 py-5">
          <p className="text-sm font-medium text-gray-500">Margen de ganancia</p>
          <p className="mt-2 text-3xl font-bold text-[#334C68]">
            {formatPercentage(calculateProfitMargin(product.cost, product.salePrice))}
          </p>
        </div>
      </div>

      <div className="px-8 pb-8">
        <h3 className="mb-4 text-lg font-bold text-[#334C68]">
          Ingredientes utilizados
        </h3>

        <div className="space-y-3">
          {product.ingredients?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-2xl bg-white px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8CFC8] text-[#5B4636]">
                  <FaEgg />
                </div>

                <div>
                  <p className="font-bold text-[#334C68]">
                    {item.ingredient?.name}
                  </p>
                  <p className="text-sm text-gray-500">Cantidad necesaria:</p>{' '}
                  {item.quantityNeeded} {item.measureNeeded}
                </div>
              </div>

              <p className="font-bold text-[#5B4636]">
                {formatPrice(calculateIngredientCost(item))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
