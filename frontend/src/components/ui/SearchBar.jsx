import { FaSearch } from "react-icons/fa";

function SearchBar({placeholder}) {
  return (
    <>
      <FaSearch
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        placeholder={placeholder}
        className="
                        w-full
                        rounded-(--radius-app)
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