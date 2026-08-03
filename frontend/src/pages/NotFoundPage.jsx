import { Link } from 'react-router-dom';
import blob1 from '../assets/blob-1.svg';
import blob2 from '../assets/blob-2.svg';

function NotFoundPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F6F1ED] text-[#334C68]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={blob1}
          alt=""
          className="absolute -top-16 right-0 h-72 w-72 object-contain opacity-60 sm:h-96 sm:w-md lg:-top-24 lg:right-0 lg:h-100 lg:w-160"
        />

        <img
          src={blob2}
          alt=""
          className="absolute -left-24 top-10 h-56 w-56 opacity-40 sm:h-72 sm:w-72 lg:-left-20 lg:h-96 lg:w-96"
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl rounded-4xl border border-[#E8CFC8] bg-white/80 p-8 shadow-[0_20px_60px_rgba(51,76,104,0.12)] backdrop-blur sm:p-10 lg:p-14">
          <p className="mb-4 inline-flex rounded-full bg-[#E8CFC8] px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#334C68]">
            Error 404
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Parece que te perdiste
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[#5f738b]">
            La página que intentás abrir no existe o fue movida. Volvé al inicio
            o ingresá al panel para seguir trabajando.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-full bg-[#334C68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#223449]"
            >
              Volver al inicio
            </Link>

            <Link
              to="/admin"
              className="rounded-full border border-[#334C68] px-5 py-3 text-sm font-semibold text-[#334C68] transition hover:bg-[#F6F1ED]"
            >
              Ir al panel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
