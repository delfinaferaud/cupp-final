import ActionsButtons from "../ui/ActionsButtons";

function ProductRow({ product, onView, onEdit, onDelete }) {
  const formatPrice = (value) => {
    if (value === undefined || value === null) return '$0';

    return value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  return (
    <tr className=" last:border-none text-center">
      <td className="px-8 py-10">{product.product}</td>
      <td className="px-8 py-10">{product.category}</td>
      <td className="px-8 py-10">{formatPrice(product.cost)}</td>
      <td className="px-8 py-10">{formatPrice(product.salePrice)}</td>

      <td className="px-8">
        <ActionsButtons
          onView={() => onView(product)}
          onEdit={() => onEdit(product)}
          onDelete={() => onDelete(product)}
        />
      </td>
    </tr>
  );
}

export default ProductRow;