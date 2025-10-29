import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopifyHeroSection from '../components/shopify/ShopifyHeroSection';
import ShopifyBenefitsSection from '../components/shopify/ShopifyBenefitsSection';
import ShopifyHowItWorksSection from '../components/shopify/ShopifyHowItWorksSection';
import ShopifyUseCaseSection from '../components/shopify/ShopifyUseCaseSection';
import ShopifyFeaturesTable from '../components/shopify/ShopifyFeaturesTable';
import ShopifyWhyStoryclashSection from '../components/shopify/ShopifyWhyStoryclashSection';
import ShopifyFAQSection from '../components/shopify/ShopifyFAQSection';
import CTASection from '../components/CTASection';

export default function ShopifyPage() {
  useDocumentTitle(
    'Shopify Influencer Marketing Integration | Storyclash',
    'Connect Shopify with Storyclash to track influencer performance, measure ROI, and visualize campaign impact. Drive ecommerce sales with creator data.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ShopifyHeroSection />
        <ShopifyBenefitsSection />
        <ShopifyHowItWorksSection />
        <ShopifyUseCaseSection />
        <ShopifyFeaturesTable />
        <ShopifyWhyStoryclashSection />
        <ShopifyFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
