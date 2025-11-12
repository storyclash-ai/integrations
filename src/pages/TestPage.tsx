import TestHeader from '../components/TestHeader';
import Footer from '../components/Footer';
import TestHeroSection from '../components/TestHeroSection';
import ShopifyBenefitsSection from '../components/shopify/ShopifyBenefitsSection';
import ShopifyHowItWorksSection from '../components/shopify/ShopifyHowItWorksSection';
import ShopifyUseCaseSection from '../components/shopify/ShopifyUseCaseSection';
import ShopifyFeaturesTable from '../components/shopify/ShopifyFeaturesTable';
import ShopifyWhyStoryclashSection from '../components/shopify/ShopifyWhyStoryclashSection';
import ShopifyFAQSection from '../components/shopify/ShopifyFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function TestPage() {
  const title = "Test Page - Header Development | Storyclash";
  const description = "Test page for header modifications and experiments.";
  const canonical = "https://www.storyclash.com/test";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash Test Page",
        "applicationCategory": "MarketingApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
        "description": description,
        "url": canonical,
        "brand": { "@type": "Brand", "name": "Storyclash" }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        openGraphImage="/og/integrations-shopify.png"
        jsonLd={jsonLd}
      />
      <TestHeader />
      <main>
        <TestHeroSection />
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
