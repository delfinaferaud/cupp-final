import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../services/productService';

export function useProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProduct = async () => {
    try {
      setLoading(true);

      const data = await getProduct(id);
      setProduct(data);
    } catch (error) {
      console.error('Error al obtener producto:', error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  const goBackToProducts = () => {
    navigate('/admin/products');
  };

  return {
    product,
    loading,
    loadProduct,
    goBackToProducts,
  };
}
