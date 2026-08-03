import user from '../../assets/user.svg';
import blob3 from '../../assets/blob3.svg';

function TestimonialSection() {
  return (
    <section className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-(--radius-app) bg-[#B8C7AF] px-6 py-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-8 lg:px-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-center md:gap-8 md:text-left">
            <div className="text-7xl font-extrabold leading-none text-[#7F9478] sm:text-8xl lg:text-9xl">
              “
            </div>

            <img
              src={user}
              alt="Cliente de Cupp"
              className="h-20 w-20 object-cover sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            />

            <p className="max-w-md text-base font-semibold leading-relaxed text-[#1F1F1F] sm:text-lg">
              “Antes calculaba todo en Excel. Ahora tengo costos, ganancias y
              estadísticas en segundos.”
            </p>

            <div className="flex flex-col items-center md:items-start">
              <p className="font-extrabold text-[#1F1F1F]">Camila López</p>
              <p className="text-sm font-semibold text-[#334C68]">
                Fundadora de Rincón Dulce
              </p>
              <p className="mt-2 text-xl text-[#9E6A57]">★★★★★</p>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-8 -top-6 h-24 w-24 opacity-70 sm:-right-6 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
            <img src={blob3} alt="" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;