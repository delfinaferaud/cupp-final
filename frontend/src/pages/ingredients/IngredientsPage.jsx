import Table from '../../components/layout/Table';
import Modal from '../../components/layout/Modal';
import ModalForm from '../../components/layout/ModalForm';
import { useToast } from '../../hooks/useToast';
import Toast from '../../components/ui/Toast';
import { useIngredientsPage } from '../../hooks/useIngredientsPage';
import IngredientRow from '../../components/layout/IngredientsRow';

function IngredientsPage() {
  const {
    ingredients,
    selectedIngredient,

    isCreateOpen,
    isEditOpen,
    isDeleteOpen,

    toast,

    openCreate,
    openEdit,
    openDelete,
    closeModal,
    closeToast,

    handleNewIngredient,
    handleConfirmEdit,
    handleConfirmDelete,
  } = useIngredientsPage();

  const columns = [
    'Ingrediente',
    'Cantidad',
    'Medida',
    'Precio (ARS)',
    'Acciones',
  ];

  const renderIngredients = (ingredient) => (
    <IngredientRow
      key={ingredient._id}
      ingredient={ingredient}
      onEdit={openEdit}
      onDelete={openDelete}
    />
  );


  return (
    <>
      <h2>Ingredientes</h2>
      <p>Gestioná tus ingredientes.</p>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}

      <Table
        columns={columns}
        renderRow={renderIngredients}
        data={ingredients}
        type="ingrediente"
        typeSearch="Buscar ingrediente..."
        onCreate={openCreate}
      />

      {isDeleteOpen && (
        <Modal
          open={isDeleteOpen}
          item={selectedIngredient}
          onClose={closeModal}
          onConfirm={handleConfirmDelete}
          type="ingredient"
        />
      )}

      {isEditOpen && (
        <ModalForm
          open={isEditOpen}
          onClose={closeModal}
          formType="Editar ingrediente"
          initialValues={selectedIngredient}
          onSubmit={handleConfirmEdit}
          formEntity="ingredient"
        />
      )}

      {isCreateOpen && (
        <ModalForm
          open={isCreateOpen}
          onClose={closeModal}
          formType="Agregar nuevo ingrediente"
          initialValues={null}
          onSubmit={handleNewIngredient}
          formEntity="ingredient"
        />
      )}
    </>
  );
}
export default IngredientsPage;
