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
import { Seo } from '../components/Seo';

export default function MagentoPage() {
  const title = "Magento Influencer Marketing Integration | Storyclash";
  const description = "Connect Magento with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to Magento. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/magento-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Magento Influencer Marketing Integration",
        "applicationCategory": "MarketingApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
        "description": description,
        "url": canonical,
        "brand": { "@type": "Brand", "name": "Storyclash" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.storyclash.com/" },
          { "@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://www.storyclash.com/integrations" },
          { "@type": "ListItem", "position": 3, "name": "Magento Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "Does this work with both Magento 2 and Adobe Commerce?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Storyclash integrates with both Magento Open Source 2.x and Adobe Commerce (formerly Magento Commerce) using the standard REST API."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track multiple stores and websites?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. Track creator performance across multiple Magento websites, store views, and store codes with unified or separate reporting."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How is the API connection secured?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We use OAuth token-based authentication with role-based permissions. You control exactly which data Storyclash can access from your Magento instance."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What Magento data gets synced?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Order data, revenue, product SKUs, customer acquisition, and conversion events - matched to specific influencer campaigns and creators."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Will this slow down my Magento store?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No - data syncing happens via scheduled API calls that run during low-traffic periods. Your storefront performance is unaffected."
                              }
                      }
              ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        openGraphImage="/og/integrations-Magento.png"
        jsonLd={jsonLd}
      />
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
