import { Link } from 'react-router-dom';
import trama from '../../assets/trama.svg';
import blob4 from '../../assets/blob4.svg';

function CTASection() {
  return (
    <section className="relative py-16">
      <div className="absolute -bottom-30 -right-40 opacity-50">
    <img src={blob4} alt="" />
  </div>

      <div className="mx-auto max-w-7xl px-18">
        <div
          className="
            relative
            overflow-hidden
            rounded-[var(--radius-app)]
            bg-[#334C68]
            px-8
            py-14
            text-center
          "
        >
          <div
            className="
              absolute
              inset-0
              opacity-10
              bg-size-[40px_40px]
            "
            style={{
              backgroundImage: `url(${trama})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <div className="relative z-10">
            <p className="text-3xl font-bold text-white md:text-4xl pb-5">
              Empezá a gestionar tu negocio de forma más simple
            </p>

            <p className="mx-auto text-lg text-center text-white/80">
              Probá cupp gratis y descubrí las ganancias reales de cada
              producto.
            </p>

            <Link
              to="/register"
              className="
                mt-8
                inline-flex
                rounded-full
                bg-[#B8C7AF]
                px-12
                py-4
                text-lg
                font-bold
                text-[#334C68]
                transition
                hover:opacity-90
              "
            >
              Probar gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
