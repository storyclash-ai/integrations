import Header from '../components/Header';
import BigCommerceHeroSection from '../components/bigcommerce/BigCommerceHeroSection';
import BigCommerceBenefitsSection from '../components/bigcommerce/BigCommerceBenefitsSection';
import BigCommerceHowItWorksSection from '../components/bigcommerce/BigCommerceHowItWorksSection';
import BigCommerceUseCaseSection from '../components/bigcommerce/BigCommerceUseCaseSection';
import BigCommerceFeaturesTable from '../components/bigcommerce/BigCommerceFeaturesTable';
import BigCommerceWhyStoryclashSection from '../components/bigcommerce/BigCommerceWhyStoryclashSection';
import BigCommerceFAQSection from '../components/bigcommerce/BigCommerceFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function BigCommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BigCommerceHeroSection />
        <BigCommerceBenefitsSection />
        <BigCommerceHowItWorksSection />
        <BigCommerceUseCaseSection />
        <BigCommerceFeaturesTable />
        <BigCommerceWhyStoryclashSection />
        <BigCommerceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
