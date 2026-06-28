import { useCrudModals } from "../hooks/useCrudModals";

const {
    closeModal,
  } = useCrudModals();

export const handleNewProduct = async (formData) => {
    try {
      await createNewProduct(formData);

      closeModal();

      showToast('success', 'Producto agregado correctamente');
    } catch (error) {
      showToast('error', 'No se pudo agregar el producto');

      throw error;
    }
  };

export const handleConfirmEdit = async (formData) => {
    try {
      await editProduct(selectedProduct._id, formData);

      closeModal();

      showToast('success', 'Producto editado correctamente');
    } catch (error) {
      showToast('error', 'No se pudo editar el producto');

      throw error;
    }
  };

export const handleConfirmDelete = async () => {
    try {
      await removeProduct(selectedProduct._id);

      closeModal();

      showToast('success', 'Producto eliminado correctamente');
    } catch (error) {
      console.error('Error eliminando producto', error);

      showToast('error', 'No se pudo eliminar el producto');
    }
  };