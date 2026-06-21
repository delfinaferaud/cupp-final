import api from './api';

export const getIngredients = async () => {
  const response = await api.get('/ingredients');
  return response.data;
};

export const getIngredient = async (id) => {
  const response = await api.get(`/ingredients/${id}`);
  return response.data;
}

export const createIngredient = async (ingredient) => {
  const response = await api.post('/ingredients', ingredient);
  return response.data;
};

export const updateIngredient = async (id, ingredient) => {
  const response = await api.put(`/ingredients/${id}`, ingredient);
  return response.data;
};

export const deleteIngredient = async (id) => {
  await api.delete(`/ingredients/${id}`);
};
