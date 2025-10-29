import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WooCommerceHeroSection from '../components/woocommerce/WooCommerceHeroSection';
import WooCommerceBenefitsSection from '../components/woocommerce/WooCommerceBenefitsSection';
import WooCommerceHowItWorksSection from '../components/woocommerce/WooCommerceHowItWorksSection';
import WooCommerceUseCaseSection from '../components/woocommerce/WooCommerceUseCaseSection';
import WooCommerceFeaturesTable from '../components/woocommerce/WooCommerceFeaturesTable';
import WooCommerceWhyStoryclashSection from '../components/woocommerce/WooCommerceWhyStoryclashSection';
import WooCommerceFAQSection from '../components/woocommerce/WooCommerceFAQSection';
import CTASection from '../components/CTASection';

export default function WooCommercePage() {
  useDocumentTitle(
    'WooCommerce Influencer Marketing Integration | Storyclash',
    'Connect WooCommerce with Storyclash to track influencer performance, measure ROI, and visualize campaign impact. Drive WordPress ecommerce sales with creator data.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WooCommerceHeroSection />
        <WooCommerceBenefitsSection />
        <WooCommerceHowItWorksSection />
        <WooCommerceUseCaseSection />
        <WooCommerceFeaturesTable />
        <WooCommerceWhyStoryclashSection />
        <WooCommerceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
