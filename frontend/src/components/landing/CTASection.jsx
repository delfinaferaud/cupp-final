import { Link } from 'react-router-dom';
import trama from '../../assets/trama.svg';
import blob4 from '../../assets/blob4.svg';
import CallToAction from '../ui/CallToAction';

function CTASection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-10">
      <div className="absolute -bottom-30 -right-40 opacity-50">
        <img src={blob4} alt="" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-(--radius-app) bg-[#334C68] px-6 py-10 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-8 sm:py-14 lg:px-12">
          <div
            className="absolute inset-0 opacity-10 bg-size-[40px_40px]"
            style={{
              backgroundImage: `url(${trama})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl lg:ml-6">
              <p className="pb-4 text-3xl font-bold text-white sm:text-4xl">
                Empezá a gestionar tu negocio de forma más simple
              </p>

              <p className="text-base font-semibold text-white/80 sm:text-lg">
                Probá cupp gratis y descubrí las ganancias reales de cada
                producto.
              </p>
            </div>
            <div className="text-lg sm:text-xl">
              <CallToAction />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
