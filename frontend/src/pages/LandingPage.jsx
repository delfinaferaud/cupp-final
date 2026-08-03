import CTASection from '../components/landing/CTASection';
import FeaturesSection from '../components/landing/FeaturesSection';
import Footer from '../components/landing/Footer';
import HeroSection from '../components/landing/HeroSection';
import NavBarLanding from '../components/landing/NavBarLanding';
import TestimonialSection from '../components/landing/TestimonialSection';
import blob1 from '../assets/blob-1.svg';
import blob2 from '../assets/blob-2.svg';

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F6F1ED]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={blob1}
          alt=""
          className="absolute -top-16 right-0 h-72 w-72 object-contain opacity-60 sm:h-96 sm:w-[28rem] lg:-top-24 lg:right-0 lg:h-[25rem] lg:w-[40rem]"
        />

        <img
          src={blob2}
          alt=""
          className="absolute -left-24 top-10 h-56 w-56 opacity-40 sm:h-72 sm:w-72 lg:-left-20 lg:h-96 lg:w-96"
        />
      </div>

      <div className="relative z-10">
        <NavBarLanding />
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage; 
