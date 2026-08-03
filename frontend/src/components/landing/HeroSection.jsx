import { Link } from 'react-router-dom';
import mockup from '../../assets/mockup.svg';
import linea from '../../assets/linea.svg';
import CallToAction from '../ui/CallToAction';

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-20 lg:px-8 lg:py-10">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="w-full max-w-2xl px-0 sm:px-2 lg:px-0">
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Gestioná tu emprendimiento <br /> con datos reales
          </h1>

          <div className="mb-8 sm:mt-6">
            <img
              src={linea}
              alt="Línea curva decorativa"
              className="w-full max-w-[16rem] sm:max-w-[20rem]"
            />
          </div>

          <p className="max-w-lg text-base font-semibold leading-relaxed sm:text-lg">
            Calculá costos, analizá ganancias y tomá mejores decisiones desde
            una sola plataforma.
          </p>

          <div className="mt-8 sm:mt-10">
            <CallToAction />
          </div>
        </div>

        <div className="relative flex w-full justify-center overflow-hidden px-0 sm:px-2 lg:px-0">
          <img
            src={mockup}
            alt="Vista previa de la app Cupp"
            className="relative z-10 w-full max-w-72 sm:max-w-88 lg:max-w-104"
          />
          <div className="absolute -bottom-10 z-30 h-12 w-[90%] max-w-80 bg-[#F6F1ED] shadow-[0_-30px_35px_-25px_rgba(0,0,0,1)] sm:h-16 sm:max-w-96 lg:-bottom-12 lg:max-w-104" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
