import Header from '../components/Header';
import SAPCommerceHeroSection from '../components/sapcommerce/SAPCommerceHeroSection';
import SAPCommerceBenefitsSection from '../components/sapcommerce/SAPCommerceBenefitsSection';
import SAPCommerceHowItWorksSection from '../components/sapcommerce/SAPCommerceHowItWorksSection';
import SAPCommerceUseCaseSection from '../components/sapcommerce/SAPCommerceUseCaseSection';
import SAPCommerceFeaturesTable from '../components/sapcommerce/SAPCommerceFeaturesTable';
import SAPCommerceWhyStoryclashSection from '../components/sapcommerce/SAPCommerceWhyStoryclashSection';
import SAPCommerceFAQSection from '../components/sapcommerce/SAPCommerceFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function SAPCommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SAPCommerceHeroSection />
        <SAPCommerceBenefitsSection />
        <SAPCommerceHowItWorksSection />
        <SAPCommerceUseCaseSection />
        <SAPCommerceFeaturesTable />
        <SAPCommerceWhyStoryclashSection />
        <SAPCommerceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
