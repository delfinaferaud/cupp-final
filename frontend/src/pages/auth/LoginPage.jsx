import { Link } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import AuthCard from '../../components/layout/AuthCard';
import AuthInput from '../../components/ui/AuthInput';
import AuthButton from '../../components/ui/AuthButton';
import { useLoginForm } from '../../hooks/useLoginForm';

function LoginPage() {
  const {
    form,
    errors,
    generalError,
    handleChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <AuthLayout>
      <AuthCard title="Iniciar sesión" footer={
    <>
      ¿No tenés cuenta?{' '}
      <Link
        to="/register"
        className="font-semibold text-[#334C68]"
      >
        Registrate
      </Link>
    </>
  }>
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
