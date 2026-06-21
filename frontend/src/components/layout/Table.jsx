import { FaChevronDown, FaFilter } from 'react-icons/fa6';
import SearchBar from '../ui/SearchBar';

function Table({ columns, data, renderRow }) {
  return (
    <div>
      <div className="flex items-center gap-5 py-5">
        <div className="relative w-105">
          <SearchBar />
        </div>
        <button
          className="h-8 rounded-lg py-5 px-5 bg-[#B9C6B2] text-white flex
        items-center
        justify-center gap-3"
        >
          Todas las categorías <FaChevronDown />
        </button>
        <button
          className="h-8 rounded-lg py-5 px-5 bg-[#B9C6B2] text-white flex
        items-center
        justify-center gap-3"
        >
          Filtros <FaFilter />
        </button>
      </div>
      <div className="bg-[#F2EBE6] rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full table-auto">
          <thead className="bg-[#E6DDD7]">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-8 py-5 text-sm font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{data.map(renderRow)}</tbody>
        </table>
        <div className="flex justify-center items-center gap-2 py-5 bg-[#E6DDD7]">
          <button className="h-8 w-8 rounded-lg bg-[#B9C6B2] text-white">1</button>
          <button className="h-8 w-8 rounded-lg bg-white hover:bg-gray-100">
            2
          </button>
          <button className="h-8 w-8 rounded-lg bg-white"></button>
        </div>
      </div>
    </div>
  );
}

export default Table;
