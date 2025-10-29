import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopwareHeroSection from '../components/shopware/ShopwareHeroSection';
import ShopwareBenefitsSection from '../components/shopware/ShopwareBenefitsSection';
import ShopwareHowItWorksSection from '../components/shopware/ShopwareHowItWorksSection';
import ShopwareUseCaseSection from '../components/shopware/ShopwareUseCaseSection';
import ShopwareFeaturesTable from '../components/shopware/ShopwareFeaturesTable';
import ShopwareWhyStoryclashSection from '../components/shopware/ShopwareWhyStoryclashSection';
import ShopwareFAQSection from '../components/shopware/ShopwareFAQSection';
import CTASection from '../components/CTASection';

export default function ShopwarePage() {
  useDocumentTitle(
    'Shopware Influencer Marketing Integration | Storyclash',
    'Connect Shopware with Storyclash to track influencer-driven sales, measure campaign ROI, and optimize creator performance. Boost your ecommerce success with data-driven insights.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ShopwareHeroSection />
        <ShopwareBenefitsSection />
        <ShopwareHowItWorksSection />
        <ShopwareUseCaseSection />
        <ShopwareFeaturesTable />
        <ShopwareWhyStoryclashSection />
        <ShopwareFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
