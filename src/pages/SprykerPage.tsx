import Header from '../components/Header';
import SprykerHeroSection from '../components/spryker/SprykerHeroSection';
import SprykerBenefitsSection from '../components/spryker/SprykerBenefitsSection';
import SprykerHowItWorksSection from '../components/spryker/SprykerHowItWorksSection';
import SprykerUseCaseSection from '../components/spryker/SprykerUseCaseSection';
import SprykerFeaturesTable from '../components/spryker/SprykerFeaturesTable';
import SprykerWhyStoryclashSection from '../components/spryker/SprykerWhyStoryclashSection';
import SprykerFAQSection from '../components/spryker/SprykerFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function SprykerPage() {
  const title = "Spryker Influencer Marketing Integration | Storyclash";
  const description = "Connect Spryker Commerce OS with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync Spryker order and revenue data into Storyclash for analysis. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/spryker-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Spryker Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Spryker Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash receive Spryker Commerce orders, revenue and discount code data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to Spryker Commerce OS via a secure connector and automatically receives orders, revenue, discount code usage and customer events from your store. These e-commerce signals are matched with creator content to measure real sales impact and calculate influencer ROI inside Storyclash."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Spryker Commerce metrics can be imported into Storyclash for influencer revenue attribution?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash imports Spryker metrics such as orders, revenue, net sales, products sold, discount code usage, cart values, refunds, conversions, first-time vs. returning customers, customer acquisition cost (CAC), and return on ad spend (ROAS). These shop metrics are combined with creator engagement data to deliver accurate revenue attribution for every influencer campaign."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash attribute Spryker Commerce orders to specific creators and campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash uses unique discount codes to connect Spryker Commerce orders to specific creators and campaigns. When a customer uses a creator's discount code at checkout, the sale is automatically attributed to that influencer, enabling accurate ROI measurement and performance tracking."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need a developer to integrate Spryker Commerce with Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No. Spryker Commerce can be connected to Storyclash without any developer support. Simply activate the connector in Storyclash, add the tracking snippet to your Spryker store and e-commerce data starts flowing into Storyclash automatically."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Spryker Commerce → Storyclash connector GDPR-compliant and secure?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. The Spryker Commerce connector is fully GDPR-compliant, EU-hosted and encrypted to enterprise standards. Storyclash offers role-based access, SSO and secure data handling for all e-commerce and creator metrics."
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
        openGraphImage="/og/integrations-Spryker.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SprykerHeroSection />
        <SprykerBenefitsSection />
        <SprykerHowItWorksSection />
        <SprykerUseCaseSection />
        <SprykerFeaturesTable />
        <SprykerWhyStoryclashSection />
        <SprykerFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
