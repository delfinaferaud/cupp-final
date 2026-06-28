import { Link } from 'react-router-dom';
import logo from '../../assets/logotipo.svg';
import CallToAction from '../ui/CallToAction';

function NavBarLanding() {
  const links = [
    'Inicio',
    'Funcionalidades',
    'Precios',
    'Recursos',
    'Contacto',
  ];

  return (
    <header className="relative z-20 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-18 py-8">
        <img src={logo} alt="cüpp" className="h-10 w-auto" />

        <nav className="hidden items-center gap-12 lg:flex">
          {links.map((link) => (
            <button
              key={link}
              className={`
                  w-full
                  flex
                  items-center

                  px-4
                  py-3
                  rounded-(--radius-app)
                  transition
                  ${
                    link === 'Inicio'
                      ? 'bg-[#B8C7AF] text-[#334C68]'
                      : 'hover:bg-[#E7DDD6] text-[#334C68]'
                  }
                `}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <CallToAction/>
      </div>
    </header>
  );
}

export default NavBarLanding;
