import user from '../../assets/user.svg';
import blob3 from '../../assets/blob3.svg';

function TestimonialSection() {
  return (
    <section className="relative py-1 z-10">
      
      <div className="mx-auto max-w-7xl px-18 ">
        <div className="relative overflow-hidden rounded-(--radius-app) bg-[#B8C7AF] py-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
            <div className="text-9xl font-extrabold leading-none text-[#7F9478]">
              “
            </div>

            <img
              src={user}
              alt="Cliente de Cupp"
              className="h-28 w-28 object-cover"
            />

            <p className="max-w-md text-center text-lg font-semibold leading-relaxed text-[#1F1F1F] md:text-left">
              “Antes calculaba todo en Excel. Ahora tengo costos, ganancias y
              estadísticas en segundos.”
            </p>

            <div className="text-center md:text-left">
              <p className="font-extrabold text-[#1F1F1F]">
                Camila López
              </p>
              <p className="text-sm font-semibold text-[#334C68]">
                Fundadora de Rincón Dulce
              </p>
              <p className="mt-2 text-xl text-[#9E6A57]">
                ★★★★★
              </p>
            </div>
          </div>

          <div className="absolute -right-50 -top-10 h-40">
                  <img src={blob3} alt="Blob" />
                </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;