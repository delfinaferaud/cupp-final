import { Link } from 'react-router-dom';
import mockup from '../../assets/mockup.svg';
import linea from '../../assets/linea.svg';
import CallToAction from '../ui/CallToAction';

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-10">

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 h-125">
        <div className="pl-18">
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Gestioná tu emprendimiento <br /> con datos reales
          </h1>

          <div className="-mt-10 ml-4 mb-8">
            <img src={linea} alt="Línea curva decorativa" />
          </div>

          <p className="max-w-lg text-lg font-semibold leading-relaxed">
            Calculá costos, analizá ganancias y tomá mejores decisiones desde
            una sola plataforma.
          </p>
            <div className='mt-10 text-lg'>

          <CallToAction />
            </div>
        </div>

        <div className="relative flex h-full justify-center overflow-hidden pr-25">
          <img
            src={mockup}
            alt="Vista previa de la app Cupp"
            className="relative z-10 w-70 md:w-90 lg:w-100 px-6 "
          />
          <div
            className="
    absolute
    -bottom-20
    z-30
    h-16
    w-110
    bg-[#F6F1ED]
    shadow-[0_-30px_35px_-25px_rgba(0,0,0,1)]
  "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
