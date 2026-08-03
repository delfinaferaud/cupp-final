import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logotipo.svg';
import CallToAction from '../ui/CallToAction';

function NavBarLanding() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    'Inicio',
    'Funcionalidades',
    'Precios',
    'Recursos',
    'Contacto',
  ];

  return (
    <header className="relative z-20 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <img src={logo} alt="cüpp" className="h-10 w-auto" />

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-(--radius-app) border border-[#DDD2CB] bg-white px-3 py-2 text-sm font-semibold text-[#334C68] lg:hidden"
        >
          {isOpen ? 'Cerrar' : 'Menú'}
        </button>

        <nav className="hidden items-center gap-3 lg:flex">
          {links.map((link) => (
            <button
              key={link}
              className={`rounded-(--radius-app) px-4 py-3 text-lg font-medium transition ${
                link === 'Inicio'
                  ? 'bg-[#B8C7AF] text-[#334C68]'
                  : 'text-[#334C68] hover:bg-[#E7DDD6]'
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden sm:block lg:block">
          <CallToAction />
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-4 flex w-full max-w-6xl flex-col gap-2 rounded-(--radius-app) border border-[#DDD2CB] bg-white p-4 shadow-sm lg:hidden">
          {links.map((link) => (
            <button
              key={link}
              className="rounded-(--radius-app) px-3 py-2 text-left text-sm font-medium text-[#334C68] transition hover:bg-[#F4ECE8]"
            >
              {link}
            </button>
          ))}
          <div className="mt-2">
            <CallToAction />
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBarLanding;
