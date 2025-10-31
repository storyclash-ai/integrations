import Header from '../components/Header';
import PrestaShopHeroSection from '../components/prestashop/PrestaShopHeroSection';
import PrestaShopBenefitsSection from '../components/prestashop/PrestaShopBenefitsSection';
import PrestaShopHowItWorksSection from '../components/prestashop/PrestaShopHowItWorksSection';
import PrestaShopUseCaseSection from '../components/prestashop/PrestaShopUseCaseSection';
import PrestaShopFeaturesTable from '../components/prestashop/PrestaShopFeaturesTable';
import PrestaShopWhyStoryclashSection from '../components/prestashop/PrestaShopWhyStoryclashSection';
import PrestaShopFAQSection from '../components/prestashop/PrestaShopFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function PrestaShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PrestaShopHeroSection />
        <PrestaShopBenefitsSection />
        <PrestaShopHowItWorksSection />
        <PrestaShopUseCaseSection />
        <PrestaShopFeaturesTable />
        <PrestaShopWhyStoryclashSection />
        <PrestaShopFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
