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
  const description = "Connect Magento with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync Magento order and revenue data into Storyclash for analysis. Book a demo.";
  const keywords = "Magento influencer marketing integration, Magento creator tracking, Magento influencer ROI, Magento order attribution, Magento Storyclash connector";
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
                              "name": "How does Storyclash receive Magento orders, revenue and discount code data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to Magento via a secure connector and automatically receives orders, revenue, discount code usage and customer events from your store. These e-commerce signals are matched with creator content to measure real sales impact and calculate influencer ROI inside Storyclash."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Magento metrics can be imported into Storyclash for influencer revenue attribution?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash imports Magento metrics such as orders, revenue, net sales, products sold, discount code usage, cart values, refunds, conversions, first-time vs. returning customers, customer acquisition cost (CAC), and return on ad spend (ROAS). These shop metrics are combined with creator engagement data to deliver accurate revenue attribution for every influencer campaign."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash attribute Magento orders to specific creators and campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash uses unique discount codes to connect Magento orders to specific creators and campaigns. When a customer uses a creator's discount code at checkout, the sale is automatically attributed to that influencer, enabling accurate ROI measurement and performance tracking."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need a developer to integrate Magento with Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No. Magento can be connected to Storyclash without any developer support. Simply activate the connector in Storyclash, add the tracking snippet to your Magento store and e-commerce data starts flowing into Storyclash automatically."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Magento → Storyclash connector GDPR-compliant and secure?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. The Magento connector is fully GDPR-compliant, EU-hosted and encrypted to enterprise standards. Storyclash offers role-based access, SSO and secure data handling for all e-commerce and creator metrics."
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
        keywords={keywords}
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
