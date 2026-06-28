import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../services/authService';
import logotipo from '../../assets/logotipo.svg';
import AuthLayout from '../../components/layout/AuthLayout';
import AuthCard from '../../components/layout/AuthCard';
import AuthInput from '../../components/ui/AuthInput';
import AuthButton from '../../components/ui/AuthButton';
import { useRegisterForm } from '../../hooks/useRegisterForm';

function RegisterPage() {
  const {
    form,
    errors,
    generalError,
    handleChange,
    handleSubmit
  } = useRegisterForm();

  return (
   <AuthLayout>
      <AuthCard title="Crear cuenta" footer={
    <>
      ¿Ya tenés cuenta?{' '}
      <Link
        to="/login"
        className="font-semibold text-[#334C68]"
      >
        Iniciar sesión
      </Link>
    </>
  }>
        
        <form onSubmit={handleSubmit} className="space-y-5">
            
          <AuthInput name="name" type="text" placeholder="Nombre" value={form.name}
            onChange={handleChange}
            error={errors.name}/>
          <AuthInput name="email" type="email" placeholder="Email" value={form.email}
            onChange={handleChange}
            error={errors.email}/>

          <AuthInput name="password" type="password" placeholder="Contraseña" value={form.password}
            onChange={handleChange}
            error={errors.password}/>
          <AuthButton>Crear cuenta</AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}

export default RegisterPage;