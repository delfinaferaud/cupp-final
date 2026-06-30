import { Link } from 'react-router-dom';
import trama from '../../assets/trama.svg';
import blob4 from '../../assets/blob4.svg';
import CallToAction from '../ui/CallToAction';

function CTASection() {
  return (
    <section className="relative py-16">
      <div className="absolute -bottom-30 -right-40 opacity-50">
        <img src={blob4} alt="" />
      </div>

      <div className="mx-auto max-w-7xl px-18 ">
        <div
          className="
            relative
            overflow-hidden
            rounded-(--radius-app)
            bg-[#334C68]
            px-8
            py-14
            text-center
            shadow-[0_8px_20px_rgba(0,0,0,0.08)]
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

          <div className="relative z-10 flex justify-between items-center">
            <div className="text-left w-145 ml-20">
              <p className="text-3xl font-bold text-white md:text-4xl pb-5 ">
                Empezá a gestionar tu negocio de forma más simple
              </p>

              <p className="mx-auto text-lg font-semibold text-left text-white/80">
                Probá cupp gratis y descubrí las ganancias reales de cada
                producto.
              </p>
            </div>
            <div className='mr-20 text-2xl'>

            <CallToAction/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
