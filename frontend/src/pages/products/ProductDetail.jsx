import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../services/productService';
import ProductCard from '../../components/layout/ProductCard';
import { useProductDetail } from '../../hooks/useProductDetail';
import { useProductsPage } from '../../hooks/useProductsPage';
import Toast from '../../components/ui/Toast';
import ModalForm from '../../components/layout/ModalForm';
import Modal from '../../components/layout/Modal';
import { useProductDetailPage } from '../../hooks/useProductDetailPage';

function ProductDetail({}) {
  const {
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
  } = useProductDetailPage();

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>No se encontró el producto.</p>;
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={goBackToProducts}
          className="mb-6 rounded-(--radius-app) bg-white px-4 py-2 text-sm font-semibold text-[#334C68] shadow-sm hover:bg-gray-50"
        >
          Volver a productos
        </button>

        <ProductCard
          product={product}
          onEdit={openEdit}
          onDelete={openDelete}
        />
      </div>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
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

export default ProductDetail;
