import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <FaSearch
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        placeholder="Buscar productos, recetas, ventas..."
        className="
                        w-full
                        rounded-xl
                        border
                        border-[#DDD2CB]
                        bg-white
                        py-3
                        pl-12
                        pr-4
                        outline-none
                      "
      />
    </>
  );
}

export default SearchBar;