import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <Link
          to="/register"
          className="
            rounded-full
            bg-[#5B4636]
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:opacity-90
          "
        >
          Probar gratis
        </Link>
    )
}

export default CallToAction;