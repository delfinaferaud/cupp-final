import {
  FaBoxArchive,
  FaEgg,
  FaBook,
  FaCalculator,
  FaArrowTrendUp,
  FaCartShopping,
  FaChartSimple,
  FaGear,
} from 'react-icons/fa6';
import { IoMenu, IoPeople } from 'react-icons/io5';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logotipo from '../../assets/logotipo.svg';
import { logout } from '../../services/authService';

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { icon: FaHome, label: 'Inicio' },
    { icon: FaEgg, label: 'Ingredientes', path: '/ingredients' },
    { icon: FaBoxArchive, label: 'Productos', path: '/products' },
    { icon: FaArrowTrendUp, label: 'Ventas' },
    { icon: FaCartShopping, label: 'Pedidos' },
    { icon: IoPeople, label: 'Clientes' },
    { icon: FaChartSimple, label: 'Reportes' },
    { icon: FaGear, label: 'Configuración' },
    { icon: FaSignOutAlt, label: 'Cerrar sesión', logout: true },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside
      className={`
    fixed top-0 left-0 z-50
    h-screen w-64
    bg-[#F2EBE6]
    border-r border-[#DDD2CB]
    flex flex-col
    overflow-y-auto

    transition-transform duration-300
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}

    lg:static
    lg:translate-x-0
    lg:min-h-screen
    lg:h-auto
    lg:overflow-visible
  `}
    >
      <div className="h-28 shrink-0  flex items-center px-5 gap-3 lg:justify-center border-b border-[#DDD2CB]">
        <button onClick={onClose} className="lg:hidden p-2">
          <IoMenu size={30} />
        </button>
        <img src={logotipo} alt="Logo" className="h-10 w-auto object-contain" />
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.logout) {
                  handleLogout();
                  return;
                }
                navigate(item.path);
                onClose?.();
              }}
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
                    isActive
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
      <div className="mx-4 mb-5 mt-auto shrink-0 rounded-3xl bg-[#F3DDD6] p-5">
        <h3 className="font-semibold">Plan profesional</h3>

        <p className="text-sm text-gray-500 mt-1">Tu plan actual</p>

        <button className="text-sm underline mt-2">Ver detalles</button>
      </div>
    </aside>
  );
}

export default Sidebar;
