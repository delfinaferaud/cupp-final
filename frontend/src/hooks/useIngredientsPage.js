import { useCrudModals } from "./useCrudModals";
import { useIngredients } from "./useIngredients";
import { useToast } from "./useToast";

export function useIngredientsPage() {
  const { ingredients, createNewIngredient, editIngredient, removeIngredient } =
    useIngredients();

  const {
    selectedItem: selectedIngredient,
    isCreateOpen,
    isEditOpen,
    isDeleteOpen,
    openCreate,
    openEdit,
    openDelete,
    closeModal,
  } = useCrudModals();

  const { toast, showToast, closeToast } = useToast();

  const handleNewIngredient = async (formData) => {
    try {
      await createNewIngredient(formData);

      closeModal();

      showToast('success', 'Ingrediente agregado correctamente');
    } catch (error) {
      showToast('error', 'No se pudo agregar el ingrediente');

      throw error;
    }
  };

  const handleConfirmEdit = async (formData) => {
    try {
      await editIngredient(selectedIngredient._id, formData);

      closeModal();

      showToast('success', 'Ingrediente editado correctamente');
    } catch (error) {
      showToast('error', 'No se pudo editar el ingrediente');

      throw error;
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await removeIngredient(selectedIngredient._id);

      closeModal();

      showToast('success', 'Ingrediente eliminado correctamente');
    } catch (error) {
      console.error('Error eliminando ingrediente', error);

      showToast('error', 'No se pudo eliminar el ingrediente');
    }
  };

  return {
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
  };
}