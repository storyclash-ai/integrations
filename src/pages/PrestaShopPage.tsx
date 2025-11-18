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
import { Seo } from '../components/Seo';

export default function PrestaShopPage() {
  const title = "PrestaShop Influencer Marketing Integration | Storyclash";
  const description = "Connect PrestaShop with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync PrestaShop order and revenue data into Storyclash for analysis. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/prestashop-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – PrestaShop Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "PrestaShop Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How do I connect Storyclash to my PrestaShop store?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Connect your PrestaShop store to Storyclash using the native module or connector. Follow the setup guide in Storyclash, install the connector in your PrestaShop back office, and influencer-related orders and revenue will start flowing into Storyclash automatically – no manual REST API configuration required."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Does the PrestaShop integration work with multi-store setups?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes – the Storyclash PrestaShop integration supports multi-store setups. You can track creator performance across all your PrestaShop stores with unified reporting or separate analytics per store and market."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track influencers across different European countries with PrestaShop?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. The PrestaShop integration handles multiple currencies, languages and markets with accurate revenue attribution per region, so you can compare influencer performance across European countries inside Storyclash."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the PrestaShop → Storyclash integration GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes – the PrestaShop → Storyclash integration is fully GDPR-compliant and aligned with European data privacy standards. Data from your PrestaShop store is encrypted in transit and at rest, processed on EU infrastructure and handled with proper consent and access controls."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which PrestaShop versions are supported by the Storyclash integration?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "The Storyclash integration supports PrestaShop 1.7.x and 8.x. Check our documentation for detailed compatibility notes and the latest supported versions."
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
        openGraphImage="/og/integrations-PrestaShop.png"
        jsonLd={jsonLd}
      />
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
