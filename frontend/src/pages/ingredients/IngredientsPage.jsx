import { useEffect, useState } from 'react';
import { getIngredients } from '../../services/ingredientService';
import { deleteIngredient } from '../../services/ingredientService';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/layout/Table';
import ActionsButtons from '../../components/ui/ActionsButtons';
import Modal from '../../components/layout/Modal';

function IngredientsPage() {
  const [ingredients, setIngredients] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    loadIngredients();
  }, []);

  const navigate = useNavigate();

  const handleNewIngredient = () => {
    navigate('ingredients/new');
  };

  const handleDeleteClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
  try {
    await deleteIngredient(selectedIngredient._id);
    setIsDeleteModalOpen(false);
    setSelectedIngredient(null);
    loadIngredients();
  } catch (error) {
    console.error("Error eliminando ingrediente", error);
  }
};

  const loadIngredients = async () => {
    try {
      const data = await getIngredients();
      setIngredients(data);
    } catch (error) {
      // TODO
      console.error('Error al obtener ingredientes: ', error);
    }
  };

  const columns = ['Ingrediente', 'Cantidad', 'Medida', 'Precio', 'Acciones'];

  const renderIngredients = (ingredient) => (
    <tr
      key={ingredient._id}
      className="border-b border-[#DDD2CB] last:border-none text-center"
    >
      <td className="px-8 py-10">{ingredient.name}</td>
      <td className="px-8 py-10">{ingredient.quantity}</td>
      <td className="px-8 py-10">{ingredient.measure}</td>
      <td className="px-8 py-10">{ingredient.price}</td>
      <td className="px-8">
        <ActionsButtons
          onView={() => navigate(`/ingredients/${ingredient._id}`)}
          onEdit={() => navigate(`/ingredients/edit/${ingredient._id}`)}
          onDelete={() => handleDeleteClick(ingredient)}
        />
      </td>
    </tr>
  );

  return (
    <>
    <Table
      columns={columns}
      renderRow={renderIngredients}
      data={ingredients}
    />

    {isDeleteModalOpen && (
      <Modal
        open={isDeleteModalOpen}
        ingredient={selectedIngredient}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    )}
  </>
);
}

export default IngredientsPage;
