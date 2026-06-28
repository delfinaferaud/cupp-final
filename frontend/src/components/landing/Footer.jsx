import { FaTiktok } from 'react-icons/fa6';
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import logo from '../../assets/logotipo.svg';

function Footer() {
  return (
    <footer className="bg-[#F6F1ED] pt-10 pb-8">
      <div className="mx-auto max-w-7xl px-18 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-8">
          <div>
            <img src={logo} alt="Cupp" className="h-10 w-auto mb-8" />
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
                  <AiFillInstagram size={26}/>
                </a>

                <a className="text-[#5B4636]">
                  <AiFillTikTok size={26}/>
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
