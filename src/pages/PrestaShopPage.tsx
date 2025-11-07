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
  const description = "Connect PrestaShop with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to PrestaShop. Book a demo.";
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
                                      "text": "Authenticate via your API key to connect your PrestaShop store through the Storyclash REST API. Our documentation guides you through the setup process."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Does this work with multi-store PrestaShop setups?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - track creator performance across all your PrestaShop stores with unified reporting or separate analytics per store."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track influencers across different European countries?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. The integration handles multiple currencies, languages, and markets with accurate revenue attribution per region."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is this GDPR compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - fully GDPR compliant with European data privacy standards. All data is encrypted and stored securely with proper consent handling."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which PrestaShop versions are supported?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "The module supports PrestaShop 1.7.x and 8.x versions. Check our documentation for specific version compatibility."
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
