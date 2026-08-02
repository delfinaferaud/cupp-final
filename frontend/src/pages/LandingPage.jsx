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
    <div className="relative min-h-screen bg-[#F6F1ED] overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={blob1}
          alt=""
          className="
            absolute
            -top-24
            -right-24
            h-[400px]
            w-[800px]
            object-contain
            opacity-60
          "
        />

        <img
          src={blob2}
          alt=""
          className="
            absolute
            top-10
            -left-60
            opacity-40
          "
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
