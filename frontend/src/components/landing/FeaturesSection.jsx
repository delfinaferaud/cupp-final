import {
  FaCalculator,
  FaBoxArchive,
  FaArrowTrendUp,
  FaCartShopping,
  FaChartSimple,
} from 'react-icons/fa6';
import { FaWallet } from 'react-icons/fa';

function FeaturesSection() {
  const features = [
    {
      icon: FaCalculator,
      title: 'Calculá costos',
      text: 'Conocé el costo real de cada producto.',
      bg: 'bg-[#E8CFC8]',
    },
    {
      icon: FaBoxArchive,
      title: 'Gestioná productos',
      text: 'Centralizá todas tus recetas y productos.',
      bg: 'bg-[#B8C7AF]',
    },
    {
      icon: FaArrowTrendUp,
      title: 'Analizá ganancias',
      text: 'Visualizá la rentabilidad de tu negocio.',
      bg: 'bg-[#E8CFC8]',
    },
    {
      icon: FaWallet,
      title: 'Controlá tus ventas',
      text: 'Seguí la evolución de tu facturación.',
      bg: 'bg-[#B8C7AF]',
    },
    {
      icon: FaChartSimple,
      title: 'Consultá estadísticas',
      text: 'Tomá decisiones basadas en datos.',
      bg: 'bg-[#E8CFC8]',
    },
    {
      icon: FaCartShopping,
      title: 'Todo en un solo lugar',
      text: 'Sin plantillas ni cálculos manuales.',
      bg: 'bg-[#B8C7AF]',
    },
  ];

  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-extrabold text-[#334C68] md:text-4xl">
          Todo lo que necesitás para administrar tu negocio
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-5 rounded-(--radius-app) bg-white px-6 py-6 shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-7 sm:py-7"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-(--radius-app) sm:h-16 sm:w-16 ${feature.bg}`}
                >
                  <Icon className="text-2xl text-[#5B4636]" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#1F1F1F]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 leading-snug text-[#4F4A48]">
                    {feature.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
