import Header from '../components/Header';
import MagentoHeroSection from '../components/magento/MagentoHeroSection';
import MagentoBenefitsSection from '../components/magento/MagentoBenefitsSection';
import MagentoHowItWorksSection from '../components/magento/MagentoHowItWorksSection';
import MagentoUseCaseSection from '../components/magento/MagentoUseCaseSection';
import MagentoFeaturesTable from '../components/magento/MagentoFeaturesTable';
import MagentoWhyStoryclashSection from '../components/magento/MagentoWhyStoryclashSection';
import MagentoFAQSection from '../components/magento/MagentoFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function MagentoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MagentoHeroSection />
        <MagentoBenefitsSection />
        <MagentoHowItWorksSection />
        <MagentoUseCaseSection />
        <MagentoFeaturesTable />
        <MagentoWhyStoryclashSection />
        <MagentoFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
