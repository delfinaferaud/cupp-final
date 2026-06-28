import { formatPrice } from "../../utils/pricing";
import ActionsButtons from "../ui/ActionsButtons";

function IngredientRow({ ingredient, onEdit, onDelete }) {
  return (
    <tr className="border-b border-[#DDD2CB] last:border-none text-center">
      <td className="px-8 py-10">{ingredient.name}</td>
      <td className="px-8 py-10">{ingredient.quantity}</td>
      <td className="px-8 py-10">{ingredient.measure}</td>
      <td className="px-8 py-10">{formatPrice(ingredient.price)}</td>

      <td className="px-8">
        <ActionsButtons
          onEdit={() => onEdit(ingredient)}
          onDelete={() => onDelete(ingredient)}
        />
      </td>
    </tr>
  );
}

export default IngredientRow;