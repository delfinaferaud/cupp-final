import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../../services/productService';
import Table from '../../components/layout/Table';
import ActionsButtons from '../../components/ui/ActionsButtons';
import ModalForm from '../../components/layout/ModalForm';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const columns = ['Producto', 'Categoría', 'Costo', 'Acciones'];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error al obtener productos: ', error);
    }
  };

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  const handleNewProduct = async (formData) => {
    await createProduct(formData);

    setIsCreateModalOpen(false);
    loadProducts();
  }

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleConfirmEdit = async (formData) => {
    try {
        await updateProduct(selectedProduct._id, formData);

        setIsEditModalOpen(false);
        setSelectedProduct(null); 
        loadProducts();
    } catch (error) {
        console.error('Error al editar producto', error);
    }
  }

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
        await deleteProduct(selectedProduct._id);
        setIsDeleteModalOpen(false);
        setSelectedProduct(null); 
        loadProducts();
    } catch (error) {
        console.error('Error al eliminar el producto', error);
    }
  }

  const renderProducts = (product) => (
    <tr
      key={product._id}
      className="border-b border-[#DDD2CB] last:border-none text-center"
    >
      <td className="px-8 py-10">{product.product}</td>
      <td className="px-8 py-10">{product.category}</td>
      <td className="px-8 py-10">$20000</td>
      <td className="px-8">
        <ActionsButtons 
            onView={() => navigate(`/products/${product._id}`)} 
            onEdit={() => handleEditClick(product)}
            onDelete={() => handleDeleteClick(product)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <h2>Productos</h2>
      <p>Gestioná todos los productos de tu inventario.</p>
      <Table
        columns={columns}
        renderRow={renderProducts}
        data={products}
        type="producto"
        typeSearch="Buscar producto..."
        onCreate={handleCreateClick}
        showCategories={true}
      />

      {isCreateModalOpen && (
        <ModalForm
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        formType="Agregar nuevo producto"
        initialValues={null}
        onSubmit={handleNewProduct}
        />
      )}

      {isEditModalOpen && (
        <ModalForm 
            open={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            formType="Editar producto"
            initialValues={selectedProduct}
            onSubmit={handleConfirmEdit}
        />
      )}
    </>
  );
}

export default ProductsPage;
