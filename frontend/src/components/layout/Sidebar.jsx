import {
  FaBoxArchive,
  FaEgg,
  FaBook,
  FaCalculator,
  FaArrowTrendUp,
  FaCartShopping,
  FaChartSimple,
  FaGear,
  FaBell,
  FaChevronDown,
} from 'react-icons/fa6';
import { IoHelpCircle, IoPeople } from 'react-icons/io5';
import { FaHome, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import logotipo from '../../assets/logotipo.svg';
import SearchBar from '../ui/SearchBar';

function Sidebar() {
  const menu = [
    { icon: FaHome, label: 'Inicio' },
    { icon: FaBoxArchive, label: 'Productos' },
    { icon: FaEgg, label: 'Ingredientes', active: true },
    { icon: FaBook, label: 'Recetas' },
    { icon: FaCalculator, label: 'Costos' },
    { icon: FaArrowTrendUp, label: 'Ventas' },
    { icon: FaCartShopping, label: 'Pedidos' },
    { icon: IoPeople, label: 'Clientes' },
    { icon: FaChartSimple, label: 'Reportes' },
    { icon: FaGear, label: 'Configuración' },
    { icon: FaSignOutAlt, label: 'Cerrar sesión' },
  ];
  return (
    <div className="flex min-h-scree w-full bg-[#F6F1ED]">
      <aside className="w-64 bg-[#F2EBE6] border-r border-[#DDD2CB] flex flex-col">
        <div className="h-28 flex items-center justify-center border-b border-[#DDD2CB]">
          <img src={logotipo} alt="Logo" className="h-8 w-auto" />
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`
                  w-full
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-xl
                  transition
                  ${
                    item.active
                      ? 'bg-[#B8C7AF] text-[#334C68]'
                      : 'hover:bg-[#E7DDD6] text-[#334C68]'
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="mx-4 mb-5 rounded-3xl bg-[#F3DDD6] p-5">
          <h3 className="font-semibold">Plan profesional</h3>

          <p className="text-sm text-gray-500 mt-1">Tu plan actual</p>

          <button className="text-sm underline mt-2">Ver detalles</button>
        </div>
      </aside>
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="h-28 bg-[#F8F5F2] border-b border-[#DDD2CB] flex items-center justify-between px-10">
          {/* Search */}
          <div className="relative w-105">
            <SearchBar/>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button>
              <FaBell size={22} className="text-[#334C68]" />
            </button>
            <button>
              <IoHelpCircle size={30} className="text-[#334C68]" />
            </button>

            <div className="flex items-center gap-3">
              <div
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-[#334C68]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                "
              >
                N
              </div>

              <div>
                <p className="font-semibold leading-none">Nanu Bakery</p>

                <p className="text-sm text-gray-500">Mi emprendimiento</p>
              </div>

              <FaChevronDown size={18} className="text-gray-500" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto px-10 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
