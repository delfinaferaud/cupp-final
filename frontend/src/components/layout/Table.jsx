import { FaChevronDown, FaFilter } from 'react-icons/fa6';
import SearchBar from '../ui/SearchBar';

function Table({
  columns,
  data,
  renderRow,
  type,
  typeSearch,
  onCreate,
  showCategories = false,
}) {
  return (
    <div>
      <div className="flex flex-col gap-3 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <SearchBar placeholder={typeSearch} />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap">
          {showCategories && (
            <button className="h-10 rounded-lg px-4 bg-[#B9C6B2] text-[#334C68] font-medium flex items-center justify-center gap-3 whitespace-nowrap">
              Todas las categorías <FaChevronDown />
            </button>
          )}

          <button className="h-10 rounded-lg px-4 bg-[#B9C6B2] text-[#334C68] font-medium flex items-center justify-center gap-3 whitespace-nowrap">
            Filtros <FaFilter />
          </button>

          <button
            onClick={onCreate}
            className="h-10 rounded-lg px-4 bg-[#5B4636] text-white font-medium flex items-center justify-center gap-3 whitespace-nowrap"
          >
            Nuevo {type}
          </button>
        </div>
      </div>

      <div className="bg-[#F2EBE6] rounded-2xl overflow-x-auto shadow-sm">
        <div className="min-w-225">
          <table className="w-full">
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

          <div className="flex w-full justify-center items-center gap-2 py-5 bg-[#E6DDD7]">
            <button className="h-8 w-8 rounded-lg bg-[#B9C6B2] text-white">
              1
            </button>
            <button className="h-8 w-8 rounded-lg bg-white hover:bg-gray-100">
              2
            </button>
            <button className="h-8 w-8 rounded-lg bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
