import Header from '../components/Header';
import SquarespaceHeroSection from '../components/squarespace/SquarespaceHeroSection';
import SquarespaceBenefitsSection from '../components/squarespace/SquarespaceBenefitsSection';
import SquarespaceHowItWorksSection from '../components/squarespace/SquarespaceHowItWorksSection';
import SquarespaceUseCaseSection from '../components/squarespace/SquarespaceUseCaseSection';
import SquarespaceFeaturesTable from '../components/squarespace/SquarespaceFeaturesTable';
import SquarespaceWhyStoryclashSection from '../components/squarespace/SquarespaceWhyStoryclashSection';
import SquarespaceFAQSection from '../components/squarespace/SquarespaceFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function SquarespacePage() {
  const title = "Squarespace Influencer Marketing Integration | Storyclash";
  const description = "Connect Squarespace Commerce with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync Squarespace order and revenue data into Storyclash for analysis. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/squarespace-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Squarespace Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Squarespace Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash receive Squarespace Commerce orders, revenue and customer data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash receives orders, revenue, products and customer events from your Squarespace Commerce store via a secure connector. All ecommerce data is unified in Storyclash and linked with creator activity for accurate attribution."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Squarespace Commerce metrics can be imported into Storyclash for influencer revenue attribution?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash ingests Squarespace metrics such as orders, revenue, products sold, discount code usage, AOV, refunds, new vs. returning customers and timestamps for influencer revenue reporting."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash attribute Squarespace orders to specific creators and campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash uses unique discount codes to connect Squarespace orders to specific creators and campaigns. When a customer uses a creator's discount code at checkout, the sale is automatically attributed to that influencer, enabling accurate ROI measurement and performance tracking."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need a developer to connect Squarespace Commerce with Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No. Squarespace Commerce can be connected to Storyclash without backend development. Activate the connector in Storyclash, add the snippet to your store and data begins syncing automatically."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Squarespace → Storyclash connector GDPR-compliant and secure?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. The Squarespace → Storyclash connector is fully GDPR-compliant, encrypted and EU-hosted, with role-based permissions and SSO for enterprise-grade security."
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
        openGraphImage="/og/integrations-Squarespace.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SquarespaceHeroSection />
        <SquarespaceBenefitsSection />
        <SquarespaceHowItWorksSection />
        <SquarespaceUseCaseSection />
        <SquarespaceFeaturesTable />
        <SquarespaceWhyStoryclashSection />
        <SquarespaceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
