// src/components/auth/AuthCard.jsx

import logotipo from '../../assets/logotipo.svg';

function AuthCard({ title, children, footer }) {
  return (
    <div
      className="
        w-full
        max-w-[360px]
        rounded-[28px]
        bg-[#EFE4DC]
        px-8
        py-10
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
      "
    >
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={logotipo}
          alt="Cupp"
          className="h-14 w-auto"
        />
      </div>

      {/* Título */}
      <h2 className="mt-6 text-center text-2xl font-semibold text-[#5B4636]">
        {title}
      </h2>

      {/* Form */}
      <div className="mt-8">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="mt-6 text-center  text-[#5B4636]">
          {footer}
        </div>
      )}
    </div>
  );
}

export default AuthCard;