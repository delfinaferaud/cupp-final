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
    <div className="min-h-screen bg-[#F6F1ED] overflow-x-hidden">
      <div className="absolute -top-24 -right-24 h-100 w-200 opacity-64">
        <img src={blob1} alt="Blob" />
      </div>
      <div className="absolute bottom-20 -left-60 h-80 w-170 opacity-50">
        <img src={blob2} alt="Blob" />
      </div>
      <NavBarLanding />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage; 
