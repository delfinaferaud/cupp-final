import { useNavigate } from 'react-router-dom';
import { useProducts } from './useProducts';
import { useCrudModals } from './useCrudModals';
import { useToast } from './useToast';
import { useProductDetail } from './useProductDetail';

export function useProductsPage() {
  const navigate = useNavigate();

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

  const { toast, showToast, closeToast } = useToast();

  const handleViewProduct = (product) => {
    navigate(`/products/${product._id}`);
  };

  const handleNewProduct = async (formData) => {
    try {
      await createNewProduct(formData);

      closeModal();

      showToast('success', 'Producto agregado correctamente');
    } catch (error) {
      showToast('error', 'No se pudo agregar el producto');

      throw error;
    }
  };

  const handleConfirmEdit = async (formData) => {
    try {
      await editProduct(selectedProduct._id, formData);

      closeModal();

      showToast('success', 'Producto editado correctamente');
    } catch (error) {
      showToast('error', 'No se pudo editar el producto');

      throw error;
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await removeProduct(selectedProduct._id);

      closeModal();

      showToast('success', 'Producto eliminado correctamente');
    } catch (error) {
      console.error('Error eliminando producto', error);

      showToast('error', 'No se pudo eliminar el producto');
    }
  };

  return {
    products,
    selectedProduct,

    isCreateOpen,
    isEditOpen,
    isDeleteOpen,

    toast,

    openCreate,
    openEdit,
    openDelete,
    closeModal,
    closeToast,

    handleViewProduct,
    handleNewProduct,
    handleConfirmEdit,
    handleConfirmDelete,
  };
}
