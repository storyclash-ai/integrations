import Header from '../components/Header';
import WixHeroSection from '../components/wix/WixHeroSection';
import WixBenefitsSection from '../components/wix/WixBenefitsSection';
import WixHowItWorksSection from '../components/wix/WixHowItWorksSection';
import WixUseCaseSection from '../components/wix/WixUseCaseSection';
import WixFeaturesTable from '../components/wix/WixFeaturesTable';
import WixWhyStoryclashSection from '../components/wix/WixWhyStoryclashSection';
import WixFAQSection from '../components/wix/WixFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function WixPage() {
  const title = "Wix Influencer Marketing Integration | Storyclash";
  const description = "Connect Wix with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync Wix order and revenue data into Storyclash for analysis. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/wix-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Wix Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Wix Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash receive Wix orders, revenue and customer data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash receives orders, revenue, products and customer events from your Wix store via a secure connector. All ecommerce data is unified inside Storyclash and linked with creator activity for full-funnel reporting."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Wix ecommerce metrics can be imported into Storyclash for influencer revenue attribution?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash ingests Wix metrics such as orders, revenue, products sold, discount code usage, AOV, refunds, new vs. returning customers and timestamps for accurate revenue attribution."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash attribute Wix orders to specific creators and campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash uses unique discount codes to connect Wix orders to specific creators and campaigns. When a customer uses a creator's discount code at checkout, the sale is automatically attributed to that influencer, enabling accurate ROI measurement and performance tracking."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need a developer to connect Wix with Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No. Wix can be connected to Storyclash without any backend development. Activate the Wix connector in Storyclash, add the snippet to your store and data will start syncing automatically."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Wix → Storyclash connector GDPR-compliant and secure?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. The Wix → Storyclash connector is fully GDPR-compliant, encrypted and EU-hosted, with SSO and role-based access for enterprise-grade security."
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
        openGraphImage="/og/integrations-Wix.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <WixHeroSection />
        <WixBenefitsSection />
        <WixHowItWorksSection />
        <WixUseCaseSection />
        <WixFeaturesTable />
        <WixWhyStoryclashSection />
        <WixFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
