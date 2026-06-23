import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/authService';
import logotipo from '../../assets/logotipo.svg';
import AuthLayout from '../../components/layout/AuthLayout';
import AuthCard from '../../components/layout/AuthCard';
import AuthInput from '../../components/ui/AuthInput';
import AuthButton from '../../components/ui/AuthButton';

function LoginPage() {
  const navigate = useNavigate();

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

  return (
    <AuthLayout>
      <AuthCard title="Iniciar sesión" footer="Olvidé mi contraseña">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <AuthInput
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <AuthInput
            name="password"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />

          <AuthButton>Iniciar sesión</AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}

export default LoginPage;
