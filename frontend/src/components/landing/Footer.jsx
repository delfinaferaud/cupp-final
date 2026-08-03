import { FaTiktok } from 'react-icons/fa6';
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai';
import logo from '../../assets/logotipo.svg';

function Footer() {
  return (
    <footer className="bg-[#F6F1ED] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <img src={logo} alt="Cupp" className="mb-8 h-10 w-auto" />
            <p className="mt-4 max-w-xs font-semibold text-[#334C68]">
              Gestioná costos, productos y ganancias desde una sola plataforma.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="font-extrabold text-[#334C68]">Navegación</h3>
              <ul className="mt-4 space-y-2 text-[#334C68]">
                <li>Inicio</li>
                <li>Funcionalidades</li>
                <li>Precios</li>
                <li>Recursos</li>
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold text-[#334C68]">Soporte</h3>
              <ul className="mt-4 space-y-2 text-[#334C68]">
                <li>Contacto</li>
                <li>Preguntas frecuentes</li>
                <li>Ayuda</li>
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold text-[#334C68]">Seguinos</h3>
              <div className="mt-4 flex gap-3">
                <a className="text-[#5B4636]">
                  <AiFillInstagram size={26} />
                </a>

                <a className="text-[#5B4636]">
                  <AiFillTikTok size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-semibold text-[#334C68]/70">
          © 2026 Cupp. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
