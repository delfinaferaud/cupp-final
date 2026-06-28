import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

export function useRegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
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

      await register(form);

      navigate('/login');
    } catch (error) {
      const data = error.response?.data;

      setErrors(data?.errors || {});
      setGeneralError(data?.message || 'Error al registrarse');
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
