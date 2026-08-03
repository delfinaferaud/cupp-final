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

    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = 'El email es obligatorio';
    }

    if (!form.password.trim()) {
      nextErrors.password = 'La contraseña es obligatoria';
    }

    setErrors(nextErrors);
    setGeneralError('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      await login(form);
      navigate('/admin');
    } catch (error) {
      const data = error.response?.data;
      const serverErrors = data?.errors || {};

      setErrors(serverErrors);
      setGeneralError(
        data?.message || 'Email o contraseña incorrectos. Intentá nuevamente.',
      );
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
