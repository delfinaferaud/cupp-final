import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function useLoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrors({});
      setGeneralError('');

      await login(form);

      navigate('/ingredients');
    } catch (error) {
      const data = error.response?.data;

      setErrors(data?.errors || {});
      setGeneralError(data?.message || 'Error al iniciar sesión');
    }
  };

  return {
    form,
    errors,
    generalError,
    handleChange,
    handleSubmit,
  };
}