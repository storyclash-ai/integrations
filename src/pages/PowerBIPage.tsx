import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import UseCaseSection from '../components/UseCaseSection';
import FeaturesTable from '../components/FeaturesTable';
import WhyStoryclashSection from '../components/WhyStoryclashSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function PowerBIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <UseCaseSection />
        <FeaturesTable />
        <WhyStoryclashSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
