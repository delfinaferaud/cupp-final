import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../services/productService';
import ProductCard from '../../components/layout/ProductCard';
import { useProductDetail } from '../../hooks/useProductDetail';

function ProductDetail() {
 const { product, loading, goBackToProducts } = useProductDetail();

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>No se encontró el producto.</p>;
  }

  return (
    <div>
      <button
        type="button"
        onClick={goBackToProducts}
        className="mb-6 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#334C68] shadow-sm hover:bg-gray-50"
      >
        Volver a productos
      </button>

      <ProductCard product={product} />
    </div>
  );
}

export default ProductDetail;