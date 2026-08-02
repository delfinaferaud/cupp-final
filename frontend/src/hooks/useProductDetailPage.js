import { updateProduct, deleteProduct } from '../services/productService';
import { useCrudModals } from './useCrudModals';
import { useToast } from './useToast';
import { useProductDetail } from './useProductDetail';

export function useProductDetailPage() {
  const {
    product,
    loading,
    loadProduct,
    goBackToProducts,
  } = useProductDetail();

  const {
    selectedItem: selectedProduct,
    isEditOpen,
    isDeleteOpen,
    openEdit,
    openDelete,
    closeModal,
  } = useCrudModals();

  const { toast, showToast, closeToast } = useToast();

  const handleConfirmEdit = async (formData) => {
    try {
      if (!selectedProduct?._id) return;

      await updateProduct(selectedProduct._id, formData);

      closeModal();

      await loadProduct();

      showToast('success', 'Producto editado correctamente');
    } catch (error) {
      console.error('Error editando producto:', error.response?.data || error);

      showToast(
        'error',
        error.response?.data?.message || 'No se pudo editar el producto'
      );

      throw error;
    }
  };

  const handleConfirmDelete = async () => {
    try {
      if (!selectedProduct?._id) return;

      await deleteProduct(selectedProduct._id);

      closeModal();

      goBackToProducts();
    } catch (error) {
      console.error('Error eliminando producto:', error.response?.data || error);

      showToast(
        'error',
        error.response?.data?.message || 'No se pudo eliminar el producto'
      );
    }
  };

  return {
    product,
    loading,

    selectedProduct,
    isEditOpen,
    isDeleteOpen,

    toast,

    openEdit,
    openDelete,
    closeModal,
    closeToast,

    handleConfirmEdit,
    handleConfirmDelete,
    goBackToProducts,
  };
}