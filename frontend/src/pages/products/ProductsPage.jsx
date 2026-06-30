import Table from '../../components/layout/Table';
import ModalForm from '../../components/layout/ModalForm';
import Modal from '../../components/layout/Modal';
import { formatPrice } from '../../utils/pricing';
import { useProductsPage } from '../../hooks/useProductsPage';
import ProductRow from '../../components/layout/ProductRow';
import Toast from '../../components/ui/Toast';

function ProductsPage() {
  const {
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
  } = useProductsPage();

  const columns = [
    'Producto',
    'Categoría',
    'Costo (ARS)',
    'Precio (ARS)',
    'Acciones',
  ];

  const renderProducts = (product) => (
    <ProductRow
      key={product._id}
      product={product}
      onView={handleViewProduct}
      onEdit={openEdit}
      onDelete={openDelete}
    />
  );

  return (
    <>
      <h2>Productos</h2>
      <p>Gestioná todos los productos de tu inventario.</p> 
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}

      <Table
        columns={columns}
        renderRow={renderProducts}
        data={products}
        type="producto"
        typeSearch="Buscar producto..."
        onCreate={openCreate}
        showCategories={true} 
      />

      {isCreateOpen && (
        <ModalForm
          open={isCreateOpen}
          onClose={closeModal}
          formType="Agregar nuevo producto"
          initialValues={null}
          onSubmit={handleNewProduct}
          formEntity="product"
        />
      )}

      {isEditOpen && (
        <ModalForm
          open={isEditOpen}
          onClose={closeModal}
          formType="Editar producto"
          initialValues={selectedProduct}
          onSubmit={handleConfirmEdit}
          formEntity="product"
        />
      )}

      {isDeleteOpen && (
        <Modal
          open={isDeleteOpen}
          item={selectedProduct}
          onClose={closeModal}
          onConfirm={handleConfirmDelete}
          type="product"
        />
      )}
    </>
  );
}

export default ProductsPage;
