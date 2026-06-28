import logotipo from '../../assets/logotipo.svg';

function AuthCard({ title, children, footer }) {
  return (
    <div
      className="
        w-full
        max-w-90
        rounded-(--radius-app)
        bg-[#EFE4DC]
        px-8
        py-10
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex justify-center mb-6">
        <img
          src={logotipo}
          alt="Cupp"
          className="h-14 w-auto"
        />
      </div>

      <h2 className="mt-6 text-center text-2xl font-semibold text-[#5B4636]">
        {title}
      </h2>

      <div className="mt-8">
        {children}
      </div>

      {footer && (
        <div className="mt-6 text-center text-[#5B4636]">
          {footer}
        </div>
      )}
    </div>
  );
}

export default AuthCard;