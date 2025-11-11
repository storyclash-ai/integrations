import Header from '../components/Header';
import TealiumHeroSection from '../components/tealium/TealiumHeroSection';
import TealiumBenefitsSection from '../components/tealium/TealiumBenefitsSection';
import TealiumHowItWorksSection from '../components/tealium/TealiumHowItWorksSection';
import TealiumUseCaseSection from '../components/tealium/TealiumUseCaseSection';
import TealiumFeaturesTable from '../components/tealium/TealiumFeaturesTable';
import TealiumWhyStoryclashSection from '../components/tealium/TealiumWhyStoryclashSection';
import TealiumFAQSection from '../components/tealium/TealiumFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function TealiumPage() {
  const title = "Tealium Influencer Marketing Integration | Storyclash";
  const description = "Connect Tealium with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/tealium-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Tealium Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Tealium Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Tealium?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Send Storyclash influencer metrics to Tealium CDP via secure REST API. Stream creator performance data in real-time. Import calculated segments and audiences from Tealium back to Storyclash."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What Storyclash data syncs to Tealium?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All creator metrics including engagement, reach, conversions, ROI, campaign performance, and audience data. Storyclash sends influencer attribution events to Tealium for unified customer profiling."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I activate Storyclash data across platforms?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - use Tealium to route Storyclash influencer metrics to analytics, CRM, marketing automation, and advertising platforms. Activate creator insights across your entire marketing stack."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I import Tealium segments back to Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - export calculated segments and audiences from Tealium back to Storyclash via API. Use them for influencer scoring, segmentation, and ongoing attribution."
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
        openGraphImage="/og/integrations-Tealium.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <TealiumHeroSection />
        <TealiumBenefitsSection />
        <TealiumHowItWorksSection />
        <TealiumUseCaseSection />
        <TealiumFeaturesTable />
        <TealiumWhyStoryclashSection />
        <TealiumFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
