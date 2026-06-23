import { useEffect, useState } from 'react';
import {
  createIngredient,
  getIngredients,
} from '../../services/ingredientService';
import {
  deleteIngredient,
  updateIngredient,
} from '../../services/ingredientService';
import Table from '../../components/layout/Table';
import ActionsButtons from '../../components/ui/ActionsButtons';
import Modal from '../../components/layout/Modal';
import ModalForm from '../../components/layout/ModalForm';

function IngredientsPage() {
  const [ingredients, setIngredients] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    loadIngredients();
  }, []);

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
      console.error('Error eliminando ingrediente', error);
    }
  };

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };
  const handleNewIngredient = async (formData) => {
    await createIngredient(formData);

    setIsCreateModalOpen(false);
    loadIngredients();
  };

  const handleEditClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setIsEditModalOpen(true);
  };

  const handleConfirmEdit = async (formData) => {
    try {
      await updateIngredient(selectedIngredient._id, formData);

      setIsEditModalOpen(false);
      setSelectedIngredient(null);
      loadIngredients();
    } catch (error) {
      console.error('Error al editar ingrediente', error);
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
      <td className="px-8 py-10">${ingredient.price}</td>
      <td className="px-8">
        <ActionsButtons
          onEdit={() => handleEditClick(ingredient)}
          onDelete={() => handleDeleteClick(ingredient)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <h2>Ingredientes</h2>
      <p>Gestioná tus ingredientes.</p>
      <Table
        columns={columns}
        renderRow={renderIngredients}
        data={ingredients}
        type="ingrediente"
        typeSearch="Buscar ingrediente..."
        onCreate={handleCreateClick}
      />

      {isDeleteModalOpen && (
        <Modal
          open={isDeleteModalOpen}
          ingredient={selectedIngredient}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {isEditModalOpen && (
        <ModalForm
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          formType="Editar ingrediente"
          initialValues={selectedIngredient}
          onSubmit={handleConfirmEdit}
        />
      )}

      {isCreateModalOpen && (
        <ModalForm
          open={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          formType="Agregar nuevo ingrediente"
          initialValues={null}
          onSubmit={handleNewIngredient}
        />
      )}
    </>
  );
}

export default IngredientsPage;
