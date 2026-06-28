import { FaBell, FaChevronDown } from 'react-icons/fa6';
import SearchBar from '../ui/SearchBar';
import { IoHelpCircle, IoMenu } from 'react-icons/io5';
import logotipo from '../../assets/logotipo.svg';

function Header({ onMenuClick }) {
  return (
    <header className="lg:h-28 lg:shrink-0 bg-[#F8F5F2] border-b border-[#DDD2CB] px-10 py-4 lg:flex lg:justify-between lg:items-center">
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-between lg:hidden lg:gap-4">
          <div className="flex gap-4">
            <button onClick={onMenuClick} className="lg:hidden p-2">
              <IoMenu size={30} />
            </button>

            <div className="flex items-center justify-center">
              <img src={logotipo} alt="Logo" className="h-8 w-auto" />
            </div>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <button>
              <FaBell size={20} className="text-[#334C68]" />
            </button>
            <button>
              <IoHelpCircle size={24} className="text-[#334C68]" />
            </button>

            <div className="h-10 w-10 rounded-(--radius-app) bg-[#334C68] text-white flex items-center justify-center font-semibold">
              N
            </div>
          </div>
        </div>

        <div className="relative lg:w-105">
          <SearchBar placeholder="Buscar productos, ingredientes..." />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button>
            <FaBell size={22} className="text-[#334C68]" />
          </button>

          <button>
            <IoHelpCircle size={28} className="text-[#334C68]" />
          </button>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-(--radius-app) bg-[#334C68] text-white flex items-center justify-center font-semibold">
              N
            </div>

            <div>
              <p className="font-semibold leading-none">Nanu Bakery</p>
              <p className="text-sm text-gray-500">Mi emprendimiento</p>
            </div>

            <FaChevronDown size={18} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
