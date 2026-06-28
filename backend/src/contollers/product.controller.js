import * as productService from '../services/product.service.js';

const formatErrors = (errors = {}) => {
  const formatted = {};

  Object.keys(errors).forEach((key) => {
    formatted[key] = errors[key].message || errors[key];
  });

  return formatted;
};

const handleError = (res, error) => {
  return res.status(error.statusCode || 500).json({
    message: error.message || 'Error interno del servidor',
    errors: error.errors || {},
  });
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts(req.user._id);
    res.status(200).json(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(
      req.params.id,
      req.user._id,
    );

    if (!product) {
      return res.status(404).json({
        message: 'Producto no encontrado',
      });
    }

    res.status(200).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body, req.user._id);

    res.status(201).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(
      req.params.id,
      req.body,
      req.user._id,
    );

    if (!product) {
      return res.status(404).json({
        message: 'Producto no encontrado',
      });
    }

    res.status(200).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(
      req.params.id,
      req.user._id,
    );

    if (!product) {
      return res.status(404).json({
        message: 'Producto no encontrado',
      });
    }

    res.status(204).send();
  } catch (error) {
    handleError(res, error);
  }
};
