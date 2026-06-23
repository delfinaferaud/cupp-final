import * as authService from '../services/auth.service.js';

const formatErrors = (errors = {}) => {
  const formatted = {};

  Object.keys(errors).forEach((key) => {
    formatted[key] = errors[key].message || errors[key];
  });

  return formatted;
};

const handleError = (res, error) => {
  res.status(error.statusCode || 500).json({
    message: error.message || 'Error interno del servidor',
    errors: formatErrors(error.errors),
  });
};
export const register = async (req, res) => {
  try {
    const data = await authService.register(req.body);
    res.status(201).json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.status(200).json(data);
  } catch (error) {
    handleError(res, error);
  }
};
