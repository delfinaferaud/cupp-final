import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <Link
          to="/register"
          className="
            rounded-(--radius-app)
            bg-[#5B4636]
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-[#665447]
            shadow-[0_8px_20px_rgba(0,0,0,0.08)]
          "
        >
          Probar gratis
        </Link>
    )
}

export default CallToAction;